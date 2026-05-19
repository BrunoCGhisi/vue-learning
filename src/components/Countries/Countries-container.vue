<script setup>
import { CountriesSectionBasicInfo, CountriesSectionCurrencyList } from './Sections'
</script>

<template>
  <div class="title-container">
    <h1>Countries Data Search</h1>
  </div>

  <CountriesSectionBasicInfo
    titleCard="Country basic information's"
    subtitleCard="Searching by the country common name"
    description="This card you may search for a country name, you will have some basic information's like 'Oficial Name', 'Capital', 'National Currencie', 'Currencie Symbol'. Have fun searching!"
  />
  <CountriesSectionCurrencyList
    titleCard="Countries with the same currency"
    subtitleCard="Grouping by one common currency"
    description="This card you may search for a national currency, you will have a list of all countries that may use the specific currency. Have fun searching!"
  />
</template>

<style>
.v-card-title {
  color: #ffde00;
}

.v-card-subtitle {
  color: #effb4b;
}

.card-title {
  color: yellow;
}

.card-title-result {
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffde00;
}
</style>
