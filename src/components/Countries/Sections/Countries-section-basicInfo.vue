<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Countries } from '@/models/Countries.js'

const props = defineProps(['titleCard', 'subtitleCard', 'description'])
const optionsList = ref([])
const cardList = ref([])

const selectedItem = ref('')

async function cardCountryBasicInfo(selectedItem) {
  const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'
  const { data } = await axios.get(baseUrl)

  if (!data || data.length === 0) return 'Not found'

  const country = Countries.findCountryByName(selectedItem, data)

  let currencyCode = Object.keys(country.currencies)[0]
  currencyCode = country.currencies[currencyCode]

  if (!country) {
    return []
  }

  return [
    {
      title: 'Official name:',
      result: country.name?.official,
    },
    {
      title: 'Capital:',
      result: country.capital?.[0],
    },
    {
      title: 'Currency name:',
      result: currencyCode.name,
    },
    {
      title: 'Currency symbol:',
      result: currencyCode.symbol,
    },
  ]
}

onMounted(async () => {
  optionsList.value = await Countries.selectCountriesNames()
})

async function handleSelect(item) {
  console.log('Escolhi:' + item)
  if (!item) return

  cardList.value = await cardCountryBasicInfo(item)
}
</script>

<template>
  <v-container>
    <v-card :title="props.titleCard" :subtitle="props.subtitleCard">
      <v-row class="ml-5 mt-5">
        <v-col cols="4">
          <v-autocomplete
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

<style scoped>
.card-title-result {
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffde00;
}

.card-text-result {
  font-size: 1rem;
}
</style>
