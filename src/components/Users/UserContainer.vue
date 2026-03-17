<script setup>
import UserProfile from '@/components/Users/UserProfile.vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'

defineProps({
  userList: Array,
  user: Object,
})
</script>

<template>
  <div class="title-container">
    <h1>Controller Users</h1>
    <button-contrast text="Register" />
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
