<script setup>
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'

import { ref } from 'vue'
import { useUsers } from '@/composable/useUsers.js'
const { editUser } = useUsers()

const emit = defineEmits(['close'])

const props = defineProps({
  user: Object,
})

const name = ref(props.user.name)
const age = ref(props.user.age)
const skills = ref(props.user.skills ? props.user.skills.join(', ') : '')

function handleUserEdit() {
  if (!name.value || !age.value) {
    return alert('Please enter all fields')
  } else if (age.value <= 1 || !Number.isInteger(age.value)) {
    return alert('Please enter a valid number in the Age ')
  }

  const skillsArray = (skills.value || '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s !== ' ')

  editUser({
    id: props.user.id,
    name: name.value,
    age: Number(age.value),
    skills: skillsArray,
  })

  name.value = ''
  age.value = ''
  skills.value = ''

  emit('close')
}
</script>

<template>
  <div class="container-row">
    <input v-model="name" type="text" placeholder="User name" />
    <input v-model="age" type="number" placeholder="User age" />
    <input v-model="skills" type="text" placeholder="User skills" />
    <ButtonContrast text="Edit" @clicked="handleUserEdit" />
  </div>
  <p v-if="name">
    Preview: Creating <strong>{{ name }}</strong>
  </p>
</template>

<style scoped></style>
