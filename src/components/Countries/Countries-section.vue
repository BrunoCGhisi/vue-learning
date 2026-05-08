<script setup>
import SelectArrayList from '@/components/Commun/SelectArrayList.vue'
import { ref } from 'vue'

import { Countries } from '@/models/Countries.js'

const optionsList = await Countries.searchCountriesNames()
</script>

<template>
  <SelectArrayList :optionsList="optionsList" />
</template>

<style scoped></style>
