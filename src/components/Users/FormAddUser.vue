<script setup>
import { ref } from 'vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'

const emit = defineEmits(['user-add'])

const name = ref('')
const age = ref(null)
const skills = ref('')

function handleUserAdd() {
  if (!name.value || !age.value) {
    return alert('Please enter all fields')
  }

  const skillsArray = (skills.value || '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s !== '')

  emit('user-add', {
    name: name.value,
    age: Number(age.value),
    skills: skillsArray,
  })

  name.value = ''
  age.value = null
  skills.value = ''
}
</script>

<template>
  <div class="container-row">
    <input v-model="name" type="text" placeholder="User name" />
    <input v-model="age" type="text" placeholder="User age" />
    <input v-model="skills" type="text" placeholder="User skills" />
    <ButtonContrast text="Register" @click="handleUserAdd" />
  </div>
  <p v-if="name">
    Preview: Creating <strong>{{ name }}</strong>
  </p>
</template>

<style scoped></style>
