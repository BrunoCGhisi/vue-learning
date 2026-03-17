<script setup>

import UserProfile from "@/components/Users/UserProfile.vue";

defineProps({
  userList: [],
  user: Object,
})

</script>

<template>
  <h1>Controller Users</h1>
  <div class="container-card">
    <div class="card" v-for="(user, index) in userList" :key="index">
      <user-profile :user="user" />
    </div>
  </div>
</template>

<style scoped>

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
