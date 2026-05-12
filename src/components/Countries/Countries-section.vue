<script setup>
import SelectArrayList from '@/components/Commun/SelectArrayList.vue'
import { ref, onMounted } from 'vue'

import { Countries } from '@/models/Countries.js'

const optionsList = ref([])

onMounted(async () => {
  optionsList.value = await Countries.searchCountriesNames()
})
</script>

/*

<template>
  <div>
    <div class="section-title">titulo</div>
    <SelectArrayList :optionsList="optionsList" />

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
  </div>
</template>

<style scoped></style>
