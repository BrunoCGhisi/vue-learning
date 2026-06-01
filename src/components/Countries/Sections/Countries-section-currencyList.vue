<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Countries } from '@/models/Countries.js'
import { AutocompletePrimary } from '@/components/Commun/Vuetify/index.js'

const props = defineProps(['titleCard', 'subtitleCard', 'description'])
const optionsList = ref([])
const cardList = ref([])

const selectedItem = ref('')

async function cardCountrySameCurrency(selectedCurrency) {
  const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'
  const { data } = await axios.get(baseUrl)
  if (!Countries.verifyData(data)) {
    return []
  }
  const listCountries = await Countries.SearchCountryListByCurrency(selectedCurrency, data)

  return [
    {
      title: 'Total countries:',
      result: listCountries.length,
    },
    {
      title: 'Countries list:',
      result: listCountries.join(', '),
    },
  ]
}

onMounted(async () => {
  optionsList.value = await Countries.selectSearchCurrencies()
})

async function handleSelect(item) {
  console.log('Escolhi:' + item)
  if (!item) return

  cardList.value = await cardCountrySameCurrency(item)
}
</script>

<template>
  <v-container>
    <v-card :title="props.titleCard" :subtitle="props.subtitleCard">
      <v-row class="ml-5 mt-5">
        <v-col cols="4">
          <AutocompletePrimary
            color="primary"
            base-color="primary"
            label="Select country"
            :items="optionsList"
            v-model="selectedItem"
            @update:modelValue="handleSelect"
          />
        </v-col>
        <v-col>
          <div>{{ props.description }}</div>
        </v-col>
      </v-row>

      <v-row v-for="item in cardList" :key="item.title" class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div class="card-title-result">{{ item.title }}</div>
          <div>{{ item.result }}</div>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-card>
  </v-container>
</template>

<style scoped></style>
