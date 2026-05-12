<script setup>
import SelectArrayList from '@/components/Commun/SelectArrayList.vue'
import { ref, onMounted } from 'vue'

import { Countries } from '@/models/Countries.js'

const optionsList = ref([])

onMounted(async () => {
  optionsList.value = await Countries.searchCountriesNames()
})
</script>

<template>
  <div>AaaaaCaaaaaBaaaaaCaaaaaA</div>
  <SelectArrayList :optionsList="optionsList" />
</template>

<style scoped></style>
