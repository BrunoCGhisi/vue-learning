<script setup>
import CountriesSection from '@/components/Countries/Countries-section.vue'
import { Countries } from '@/models/Countries.js'
</script>

<template>
  <div class="title-container">
    <h1>Countries Data Search</h1>
  </div>

  <CountriesSection
    titleCard="Country basic information's"
    subtitleCard="Searching by the country common name"
    description="This card you may search for a country name, you will have some basic information's like 'Oficial Name', 'Capital', 'National Currencie', 'Currencie Symbol'. Have fun searching!"
    :selectMethodName="Countries.SelectCountriesNames"
    :cardMethodName="Countries.cardCountryBasicInfo"
  />
  <CountriesSection
    titleCard="Countries with the same currency"
    subtitleCard="Grouping by one common currency"
    description="This card you may search for a national currency, you will have a list of all countries that may use the specific currency. Have fun searching!"
    :selectMethodName="Countries.SelectSearchCurrencies"
    :cardMethodName="Countries.cardCountrySameCurrency"
  />
</template>

<style scoped>
:deep(.v-card-title) {
  color: #ffde00;
}

:deep(.v-card-subtitle) {
  color: #effb4b;
}

:deep(.v-select) {
  color: #ffde00;
}
</style>
