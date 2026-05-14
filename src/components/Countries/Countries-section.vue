<script setup>
import { ref, onMounted } from 'vue'

import { Countries } from '@/models/Countries.js'

const optionsList = ref([])

onMounted(async () => {
  optionsList.value = await Countries.searchCountriesNames()
})
</script>

/*

<template>
  <v-container>
    <v-card title="Country basic informations" subtitle="Searching by the country common name">
      <v-row size="12">
        <v-col cols="1"> </v-col>
        <v-col cols="6">
          <v-select label="Select" :items="optionsList" />
        </v-col>
      </v-row>

      <v-card-title> nomeOficial </v-card-title>
      <v-card-text> resultadoNomeOficial </v-card-text>
      <!--
      No método do search, pegar o número total de resultados e fazer um for.
      Criar número de títulos igual ao número total de resultados.
      Assim cada componente fica bonitinho
      -->

      <div class="section-title"></div>
      <div class="section-result"></div>

      <div class="section-title">capital</div>
      <div class="section-result">resultadoCapital</div>

      <div class="section-title">moeda</div>
      <div class="section-result">resultadoMoeda</div>

      <div class="section-title">símboloMoeda</div>
      <div class="section-result">símboloMoeda</div>
    </v-card>
  </v-container>
</template>

<style scoped></style>
