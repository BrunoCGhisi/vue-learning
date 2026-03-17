<script setup>

defineProps(['text'])
const emit = defineEmits(['clicked'])

</script>

<template>
<button
  @click="emit('clicked')"
>
  {{text}}
</button>

</template>

<style scoped>

button{
  background: rgba(255, 183, 0, 0.87);
  color: white;
  font-weight: bold;
  font-family: arial, Roboto, sans-serif;
  min-height: 30px;
  max-height: 75px;
  max-width: 100px;
  min-width: 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}
</style>
