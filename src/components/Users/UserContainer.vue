<script setup>
import { ref } from 'vue'

import UserCard from '@/components/Users/UserCard.vue'
import ModalForm from '@/components/Commun/ModalForm.vue'
import FormAddUser from '@/components/Users/cardButtons/Forms/FormAddUser.vue'
import ButtonOutlinedPrimary from '@/components/Commun/Vuetify/buttons/buttonOutlinedPrimary.vue'

defineProps({
  userList: Array,
})

const addIsModalOpen = ref(false)
</script>

<template>
  <v-row align="center" class="mb-3 justify-space-between">
    <v-col cols="auto">
      <h1>Controller Users</h1>
    </v-col>

    <v-col cols="auto">
      <button-outlined-primary
        prepend-icon="mdi-check-circle"
        @click="addIsModalOpen = true"
        text="Register"
      />
    </v-col>
  </v-row>

  <ModalForm
    :show="addIsModalOpen"
    title="Configurações de Usuário"
    @close="addIsModalOpen = false"
  >
    <FormAddUser @close="addIsModalOpen = false" />
  </ModalForm>
  <div class="container-card">
    <v-row justify="space-evenly">
      <v-col v-for="(user, index) in userList" :key="index" cols="12" sm="6" md="4" lg="3">
        <user-card :user="user" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
