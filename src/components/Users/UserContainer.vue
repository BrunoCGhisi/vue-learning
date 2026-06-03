<script setup>
import { ref } from 'vue'

import UserCard from '@/components/Users/UserCard.vue'
import ButtonOutlinedPrimary from '@/components/Commun/Vuetify/buttons/ButtonOutlinedPrimary.vue'
import DialogFormCard from '@/components/Commun/Vuetify/DialogFormCard.vue'
import FormAddUser from '@/components/Users/cardButtons/Forms/FormAddUser.vue'

defineProps({
  userList: Array,
})

const dialogAddOpen = ref(false)
const formAddRef = ref(null)

function handleAddAction() {
  formAddRef.value.handleUserAdd()
}
</script>

<template>
  <v-row align="center" class="mb-3 justify-space-between">
    <v-col cols="auto">
      <h1>Controller Users</h1>
    </v-col>

    <v-col cols="auto">
      <button-outlined-primary
        prepend-icon="mdi-account-plus"
        @click="dialogAddOpen = true"
        text="Register User"
      />
    </v-col>
  </v-row>

  <dialog-form-card
    v-model="dialogAddOpen"
    title="Add User"
    subtitle="Register the new user data in the fields"
    icon-action-button="
mdi-check-circle"
    text-action-button="Register"
    @actionButton="handleAddAction"
  >
    <form-add-user ref="formAddRef" @close="dialogAddOpen = false" />
  </dialog-form-card>
  <div class="container-card">
    <v-row justify="space-evenly">
      <v-col v-for="(user, index) in userList" :key="index" cols="12" sm="6" md="4" lg="3">
        <user-card :user="user" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
