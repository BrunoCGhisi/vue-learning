<script setup>
defineProps({ text: { type: String, required: true } })
</script>

<template>
  <v-btn variant="tonal" color="primary" base-color="primary">
    {{ text }}
  </v-btn>
</template>

<style scoped></style>
