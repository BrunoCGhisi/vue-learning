<script setup>
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import ModalForm from '@/components/Commun/ModalForm.vue'
import { computed, ref } from 'vue'
import FormEditUser from '@/components/Users/cardButtons/Forms/FormEditUser.vue'

const editIsModalOpen = ref(false)

import { useUsers } from '@/composable/useUsers.js'
import ButtonTonalPrimarySmall from '@/components/Commun/Vuetify/buttons/buttonTonalPrimarySmall.vue'
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
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <button-tonal-primary-small :text="onlineButtonText" @click="user.changeStatus()" />
      </v-col>
      <v-col>
        <button-tonal-primary-small text="Edit" @click="editIsModalOpen = true" />
      </v-col>
      <ModalForm
        :show="editIsModalOpen"
        title="Configurações de Usuário"
        @close="editIsModalOpen = false"
      >
        <FormEditUser :user="user" @close="editIsModalOpen = false" />
      </ModalForm>
      <v-col>
        <button-tonal-primary-small text="Delete" @click="handleDelete()" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
