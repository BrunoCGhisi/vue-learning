<script setup>
import { ref } from 'vue'

import UserProfile from '@/components/Users/UserProfile.vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import ModalForm from '@/components/Commun/ModalForm.vue'
import FormAddUser from '@/components/Users/cardButtons/FormAddUser.vue'

defineProps({
  userList: Array,
  user: Object,
})

const emit = defineEmits(['add-user-to-app', 'delete-user'])
const isModalOpen = ref(false)

function forwardUser(userData) {
  emit('add-user-to-app', userData)
  isModalOpen.value = false
}

function forwardDeleteUser(id) {
  emit('delete-user-to-app', id)
}
</script>

<template>
  <div class="title-container">
    <h1>Controller Users</h1>
    <button-contrast text="Register" @clicked="isModalOpen = true" />
    <ModalForm :show="isModalOpen" title="Configurações de Usuário" @close="isModalOpen = false">
      <FormAddUser @user-add="forwardUser" />
    </ModalForm>
  </div>
  <div class="container-card">
    <div class="card" v-for="(user, index) in userList" :key="index">
      <user-profile :user="user" @delete-user="forwardDeleteUser"" />
    </div>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 2vh 00px;
  justify-content: space-around;
}

.card {
  display: flex;
  background-color: #1f1f1f;
  border-radius: 10px;
  flex-direction: column;
  min-width: 21%;
  max-width: 21%;
  min-height: 35vh;
  max-height: 35vh;
  padding: 15px;
}
</style>
