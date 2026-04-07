<script setup>
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import ModalForm from '@/components/Commun/ModalForm.vue'
import { computed, ref } from 'vue'
import FormEditUser from '@/components/Users/cardButtons/Forms/FormEditUser.vue'

const editIsModalOpen = ref(false)

import { useUsers } from '@/composable/useUsers.js'
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
  <div class="card-buttons">
    <ButtonContrast :text="onlineButtonText" @clicked="user.changeStatus()" />
    <ButtonContrast text="Editar" @clicked="editIsModalOpen = true" />
    <ModalForm
      :show="editIsModalOpen"
      title="Configurações de Usuário"
      @close="editIsModalOpen = false"
    >
      <FormEditUser :user="user" @close="editIsModalOpen = false" />
    </ModalForm>
    <ButtonContrast text="Deletar" @clicked="handleDelete" />
  </div>
</template>

<style scoped>
.card-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: auto;
  gap: 00px 10px;
  min-width: 222px;
}
</style>
