<script setup>
import IbgeSection from '@/components/IBGE/Ibge-section.vue'
</script>

<template>
  <div class="title-container">
    <h1>IBGE Data Search</h1>
  </div>
  <div class="ibge-container">
    <IbgeSection
      title="Name Frequency"
      placeholderTextField="Ex: Bruno"
      type="name"
      url="https://servicodados.ibge.gov.br/api/v2/censos/nomes/"
    />

    <!--    <IbgeSection-->
    <!--      title="Cities by Region in Brasil"-->
    <!--      placeholderTextField="Ex: Sul (Sc, Pr, Rs)"-->
    <!--      type="cityByRegion"-->
    <!--      url="https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"-->
    <!--      :filterLocal="true"-->
    <!--    />-->

    <!--    <IbgeSection-->
    <!--      title="Country Capital"-->
    <!--      placeholderTextField="Ex: AR (Argentina)"-->
    <!--      type="paisCapital"-->
    <!--      url="https://servicodados.ibge.gov.br/api/v1/paises/"-->
    <!--    />-->
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
