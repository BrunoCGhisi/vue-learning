<script setup>
import { ref, onMounted } from 'vue'

import { Countries } from '@/models/Countries.js'

const optionsList = ref([])
const selectedCountry = ref('')

onMounted(async () => {
  optionsList.value = await Countries.searchCountriesNames()
})
</script>

/*

<template>
  <v-container>
    <v-card
      title="Country basic informations"
      :subtitle="`Searching by the country common name: ${selectedCountry}`"
    >
      <!--
        No método do search, pegar o número total de resultados e fazer um for.
        Criar número de títulos igual ao número total de resultados.
        Assim cada componente fica bonitinho
      -->
      <v-row size="12" class="ml-5 mt-5">
        <v-col cols="4">
          <v-select label="Select country" :items="optionsList" v-model="selectedCountry" />
        </v-col>
        <v-col>
          <div>nomeOficial</div>
          <div>resultadoNomeOficial</div>
        </v-col>
      </v-row>

      <v-row size="12" class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div>capital</div>
          <div>resultado Capital</div>
        </v-col>
      </v-row>

      <v-row size="12" class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div>moeda</div>
          <div>resultadoMoeda</div>
        </v-col>
      </v-row>

      <v-row size="12" class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div>simbolo</div>
          <div>Moeda símbolo Moeda</div>
        </v-col>
      </v-row>

      <v-row size="12"> </v-row>
    </v-card>
  </v-container>
</template>

<style scoped></style>
