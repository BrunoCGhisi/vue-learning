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
      topicSearch="Name"
      placeholderTextField="Name"
      url="https://servicodados.ibge.gov.br/api/v2/censos/nomes/"
    />
    <IbgeSection
      title="Name Frequency"
      topicSearch="Nome"
      placeholderTextField="Name"
      url="https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
    />
    <IbgeSection
      title="Name Frequency"
      topicSearch="Nome"
      placeholderTextField="Name"
      url="https://servicodados.ibge.gov.br/api/v2/censos/nomes/"
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
