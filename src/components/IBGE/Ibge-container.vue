<script setup>
import IbgeSection from '@/components/IBGE/Ibge-section.vue'
</script>

<template>
  <div class="title-container">
    <h1>IBGE Data Search</h1>
  </div>
  <div class="ibge-container">
    <IbgeSection title="Name Frequency" placeholderTextField="Ex: Bruno" methodName="findName" />
    <IbgeSection
      title="Cities by Region in Brazil"
      placeholderTextField="Ex: Sul (Sc, Pr, Rs)"
      methodName="findCitiesPerRegion"
    />
    <IbgeSection
      title="Country Capital"
      placeholderTextField="Ex: AR (Argentina)"
      methodName="findCapitalPerCountry"
    />
    <IbgeSection
      title="Ranking of the names by decade in Brazil"
      placeholderTextField="Ex: 1950"
      methodName="findRankingNamePerDecade"
    />
  </div>
</template>

<style scoped>
.ibge-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  gap: 20px;
}
</style>
