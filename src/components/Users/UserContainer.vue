<script setup>
import { ref } from 'vue'

import UserProfile from '@/components/Users/UserProfile.vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import ModalForm from '@/components/Commun/ModalForm.vue'

defineProps({
  userList: Array,
  user: Object,
})

const isModalOpen = ref(false)
</script>

<template>
  <div class="title-container">
    <h1>Controller Users</h1>
    <button-contrast text="Register" @clicked="isModalOpen = true" />
    <ModalForm :show="isModalOpen" title="Configurações de Usuário" @close="isModalOpen = false">
      <p>Aqui você pode colocar qualquer formulário ou texto!</p>
      <input type="text" placeholder="Nome do dev..." />
    </ModalForm>
  </div>
  <div class="container-card">
    <div class="card" v-for="(user, index) in userList" :key="index">
      <user-profile :user="user" />
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
  min-height: 35vh;
  max-height: 35vh;
  padding: 15px;
}
</style>
