<script setup>
import { ref } from 'vue'
import ButtonCounter from '@/components/Counters/ButtonCounter.vue'
import ButtonDuplicater from '@/components/Counters/ButtonCounter.vue'
import DividerLine from '@/components/Commun/DividerLine.vue'

import UserContainer from '@/components/Users/UserContainer.vue'

import { User } from '@/models/User'
import { initialUsers } from '@/library/userData.js' // Importa a lista

const users = ref(initialUsers)

const counter = ref(0)
const duplicated = ref(0)

function plusOne() {
  counter.value++
}
function removeOne() {
  if (counter.value < 1) {
    alert('The counter cannot excess below 0!')
  } else {
    counter.value--
  }
}
function resetCounter() {
  counter.value = 0
}
function resetDuplicated() {
  duplicated.value = 0
}
function duplicate() {
  duplicated.value = duplicated.value + counter.value * 2
}

function addNewUser(data) {
  const newId = users.value.length + 1
  const newUser = new User(newId, data.name, data.age, data.skills, true)
  users.value.push(newUser)
}
</script>

<template>
  <div class="main-container">
    <div class="header">
      <h1>Controller Buttons</h1>
      <p>
        The actual mountant of clicks is: <strong> {{ counter }} </strong>
      </p>
      <p>
        The actual mountant of clicks is: <strong> {{ duplicated }} </strong>
      </p>
    </div>

    <div class="container-row">
      <ButtonCounter text="Plus" color="#00cccc" @clicked="plusOne" />
      <ButtonCounter text="Minus" color="#aa00aa" @clicked="removeOne" />
      <ButtonCounter text="Reset" color="#ffcc00" @clicked="resetCounter" />
    </div>
    <div class="container-row">
      <ButtonDuplicater text="Plus" color="#000" @clicked="duplicate" />
      <ButtonDuplicater text="Reset" color="#aaa" @clicked="resetDuplicated" />
    </div>

    <DividerLine />

    <user-container :userList="users" @add-user-to-app="addNewUser" />

    <DividerLine />
  </div>
</template>

<style></style>
