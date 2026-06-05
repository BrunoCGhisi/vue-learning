<script setup>
defineProps({ text: { type: String, required: true } })
</script>

<template>
  <v-btn variant="tonal" color="primary" base-color="primary" elevation="4" block>
    {{ text }}
  </v-btn>
</template>

<style scoped></style>
