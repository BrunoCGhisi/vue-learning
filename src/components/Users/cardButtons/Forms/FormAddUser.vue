<script setup>
import { ref } from 'vue'

import ButtonContrast from '@/components/Commun/ButtonContrast.vue'

import { useUsers } from '@/Composable/useUsers.js'
const { addUser } = useUsers()

const emit = defineEmits(['close'])

const name = ref('')
const age = ref('')
const skills = ref('')

function handleUserAdd() {
  if (!name.value || !age.value) {
    return alert('Please enter all fields')
  } else if (age.value <= 1 || !Number.isInteger(age.value)) {
    return alert('Please enter a valid number in the Age ')
  }

  const skillsArray = (skills.value || '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s !== '')

  addUser({
    name: name.value,
    age: Number(age.value),
    skills: skillsArray,
  })

  name.value = ''
  age.value = null
  skills.value = ''

  emit('close')
}
</script>

<template>
  <div class="container-row">
    <input v-model="name" type="text" placeholder="User name" />
    <input v-model="age" type="number" placeholder="User age" />
    <input v-model="skills" type="text" placeholder="User skills" />
    <ButtonContrast text="Register" @clicked="handleUserAdd" />
  </div>
  <p v-if="name">
    Preview: Creating <strong>{{ name }}</strong>
  </p>
</template>

<style scoped></style>
