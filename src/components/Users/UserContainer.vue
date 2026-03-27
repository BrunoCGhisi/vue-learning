<script setup>
import { ref } from 'vue'

import UserCard from '@/components/Users/UserCard.vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import ModalForm from '@/components/Commun/ModalForm.vue'
import FormAddUser from '@/components/Users/cardButtons/Forms/FormAddUser.vue'

defineProps({
  userList: Array,
})

const addIsModalOpen = ref(false)
</script>

<template>
  <div class="title-container">
    <h1>Controller Users</h1>
    <ButtonContrast text="Register" @clicked="addIsModalOpen = true" />
    <ModalForm
      :show="addIsModalOpen"
      title="Configurações de Usuário"
      @close="addIsModalOpen = false"
    >
      <FormAddUser @close="addIsModalOpen = false" />
    </ModalForm>
  </div>
  <div class="container-card">
    <div class="card" v-for="(user, index) in userList" :key="index">
      <user-card :user="user" />
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
