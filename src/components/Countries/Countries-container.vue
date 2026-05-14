<script setup>
import CountriesSection from '@/components/Countries/Countries-section.vue'
</script>

<template>
  <div class="title-container">
    <h1>Countries Data Search</h1>
  </div>

  <CountriesSection
    titleCard="Country basic information's"
    subtitleCard="Searching by the country common name"
    methodName="searchCountriesNames"
  />
  <CountriesSection
    titleCard="Countries with the same currency"
    subtitleCard="Grouping by one common currency"
    methodName="searchCountriesNames"
  />
</template>

<style scoped></style>
