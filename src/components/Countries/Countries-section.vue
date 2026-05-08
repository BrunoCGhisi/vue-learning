<script setup>
import SelectArrayList from '@/components/Commun/SelectArrayList.vue'
import { ref } from 'vue'
import axios from 'axios'

const optionsList = ref(searchCountriesNames)

const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'

async function searchCountriesNames() {
  try {
    const { data } = await axios.get(baseUrl)

    if (!data || data.length === 0) return 0

    return data.map((item) => item.name?.official)
  } catch (err) {
    console.error('Error in search:', err)
    return 0
  }
}
</script>

<template>
  <SelectArrayList :optionsList="optionsList" />
</template>

<style scoped></style>
