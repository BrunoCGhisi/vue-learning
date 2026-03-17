<script setup>

defineProps(['text', 'color'])

const emit = defineEmits(['clicked'])

</script>

<template>
  <button
    :style="{ backgroundColor: color }"
    @click="emit('clicked')"
  >
    {{ text }}
  </button>
</template>

<style scoped>
button{
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 5px;
  font-weight: bold;
}
</style>
