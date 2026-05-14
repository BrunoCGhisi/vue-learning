<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps([
  'titleCard',
  'subtitleCard',
  'description',
  'selectMethodName',
  'cardMethodName',
])
const optionsList = ref([])
const cardList = ref([])

const selectedCountry = ref('')

onMounted(async () => {
  optionsList.value = await props.selectMethodName()
})

watch(selectedCountry, async (newValue) => {
  if (!newValue) return

  cardList.value = await props.cardMethodName(newValue)
})
</script>

<template>
  <v-container>
    <v-card :title="titleCard" :subtitle="subtitleCard">
      <v-row class="ml-5 mt-5">
        <v-col cols="4">
          <v-select label="Select country" :items="optionsList" v-model="selectedCountry" />
        </v-col>
        <v-col>
          <div>{{ description }}</div>
        </v-col>
      </v-row>

      <!-- Eu to literalmente chamando várias vezes um mesmo elemento. Componentizar eles com um v-for -->
      <v-row class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div class="card-title-result">NomeOficial</div>
          <div>{{ cardList[0] }}</div>
        </v-col>
      </v-row>

      <v-row class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div class="card-title-result">Capital</div>
          <div>{{ cardList[1] }}</div>
        </v-col>
      </v-row>

      <v-row class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col lass="card-title-result">
          <div class="card-title-result">moeda</div>
          <div>resultadoMoeda</div>
        </v-col>
      </v-row>

      <v-row class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div class="card-title-result">Simbolo</div>
          <div>símbolo Moeda</div>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.card-title-result {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text-result {
  font-size: 1.2rem;
}
</style>
