<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'optionsList'])
const options = ref([])
const selectedItem = ref('')
</script>

<template>
  <select v-model="selectedItem">
    <option disabled value="">Select one please.</option>
    <option v-for="option in props.optionsList" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<style scoped></style>
