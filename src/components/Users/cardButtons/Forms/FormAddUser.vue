<script setup>
import { ref } from 'vue'

import { useUsers } from '@/composable/useUsers.js'
import TextFieldPrimary from '@/components/Commun/Vuetify/TextFieldPrimary.vue'
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
defineExpose({
  handleUserAdd,
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <TextFieldPrimary label="Name" v-model="name" type="text" placeholder="User name" />
      </v-col>
      <v-col cols="6">
        <TextFieldPrimary label="Age" v-model.number="age" type="number" placeholder="User age" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TextFieldPrimary
          label="Skills"
          v-model="skills"
          type="text"
          placeholder="User skills"
          hint="Use ' , ' to separe each skill"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
