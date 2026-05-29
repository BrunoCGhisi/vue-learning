<script setup>
import { computed, ref } from 'vue'

const dialogEditOpen = ref(false)

import { useUsers } from '@/composable/useUsers.js'
import ButtonTonalPrimarySmall from '@/components/Commun/Vuetify/buttons/buttonTonalPrimarySmall.vue'
import DialogFormCard from '@/components/Commun/Vuetify/DialogFormCard.vue'
import FormEditUser from '@/components/Users/cardButtons/Forms/FormEditUser.vue'
const { deleteUser } = useUsers()

function handleDelete() {
  deleteUser(props.user.id)
}

const props = defineProps({
  user: Object,
})

const onlineButtonText = computed(() => {
  return props.user.isOn ? 'Logoff' : 'Login'
})

const formEditRef = ref(null)

function handleEditAction() {
  formEditRef.value.handleUserEdit()
}
</script>

<template>
  <v-container>
    <v-row justify="space-around" align="center" flex-wrap="flex-wrap">
      <v-col>
        <button-tonal-primary-small :text="onlineButtonText" @click="props.user.changeStatus()" />
      </v-col>
      <v-col>
        <button-tonal-primary-small text="Edit" @click="dialogEditOpen = true" />
      </v-col>
      <dialog-form-card
        v-model="dialogEditOpen"
        title="Update User"
        subtitle="Register the new user data in the fields"
        @actionButton="handleEditAction"
      >
        <form-edit-user ref="formEditRef" :user="user" @close="dialogEditOpen = false" />
      </dialog-form-card>
      <v-col>
        <button-tonal-primary-small text="Delete" @click="handleDelete()" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
