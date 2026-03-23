<script setup>
import CardButtons from '@/components/Users/cardButtons/CardButtons.vue'

defineProps({
  user: Object,
})

const emit = defineEmits(['edit-user-to-container', 'delete-user-to-container'])

function forwardEditUser(userData) {
  emit('edit-user-to-container', userData)
}

function forwardDeleteUser(id) {
  emit('delete-user-to-container', id)
}
</script>

<template>
  <div class="card-title-section">
    <span class="card-title-large"> {{ user.name }} </span>
    <span class="card-title-desc" :style="{ color: user.isOlder() ? 'red' : 'green' }">
      {{ user.age }}
    </span>
  </div>

  <span v-if="user.isOn" class="text-true">Online</span>
  <span v-else class="text-false">Offline</span>
  <span class="card-list-title"> Skills: </span>
  <ul class="card-list-text">
    <li v-for="(skill, index) in user.skills" :key="index">
      {{ skill }}
    </li>
  </ul>
  <CardButtons :user="user" @edit-user-to-card="forwardEditUser" @delete-user="forwardDeleteUser" />
</template>

<style scoped>
.text-true {
  color: #ffde00;
  font-style: italic;
  padding: 5px 00px 00px 00px;
}

.text-false {
  color: #eff4b4;
  font-style: italic;
  padding: 5px 00px 00px 00px;
}

.card-title-section {
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
}

.card-title-large {
  font-weight: bold;
  font-size: x-large;
}

.card-title-desc {
  font-style: italic;
  font-size: medium;
}

.card-list-title {
  padding: 15px 00px 00px 00px;
  color: #ffde00;
  font-weight: bold;
  font-size: large;
}

.card-list-text {
  max-height: 100px;
  overflow-y: auto;
}

li::marker {
  color: #ffde00;
}

.card-list-text::-webkit-scrollbar {
  width: 4px;
  margin-left: 30px;
  padding-left: 30px;
}

.card-list-text::-webkit-scrollbar-track {
  background: #ffde00;
  border-radius: 10px;
}

.card-list-text::-webkit-scrollbar-thumb {
  background: #ffde00;
}

.card-list-text::-webkit-scrollbar-thumb:hover {
  background: #edc800;
}
</style>
