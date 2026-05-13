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
    <v-card>
      <v-select label="Select" :items="optionsList" />

      <!--
      No método do search, pegar o número total de resultados e fazer um for.
      Criar número de títulos igual ao número total de resultados.
      Assim cada componente fica bonitinho
      -->

      <div class="section-title">nomeOficial</div>
      <div class="section-result">resultadoNomeOficial</div>

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
