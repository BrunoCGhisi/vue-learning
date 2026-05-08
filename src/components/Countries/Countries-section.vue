<script setup>
import SelectArrayList from '@/components/Commun/SelectArrayList.vue'
import { ref } from 'vue'

const optionsList = ref(['a', 'b', 'c'])
</script>

<template>
  <SelectArrayList :optionsList="optionsList" />
</template>

<style scoped></style>
