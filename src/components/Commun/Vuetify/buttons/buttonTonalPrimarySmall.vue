<script setup>
defineProps({ text: { type: String, required: true } })
</script>

<template>
  <v-btn variant="tonal" color="primary" base-color="primary" size="small" elevation="4">
    {{ text }}
  </v-btn>
</template>

<style scoped></style>
