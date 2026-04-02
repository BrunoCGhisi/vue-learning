<script setup>
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'

import { ref } from 'vue'
const props = defineProps(['title', 'topic-search', 'placeholderTextfield', 'url'])

const searchTerm = ref('')

function template() {
  console.log(`Buscando por: "${searchTerm.value}" na URL: ${props.url}`)
}
</script>

<template>
  <div class="section-title">{{ title }}</div>
  <div>
    <input v-model="searchTerm" type="text" :placeholder="placeholderTextfield" />
  </div>
  <div>
    <div>
      <ButtonContrast text="Search" @clicked="template()" />
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.section-title {
  font-weight: bold;
  font-size: large;
}
</style>
