<script setup>
import CardButtons from '@/components/Users/cardButtons/CardButtons.vue'
import { computed } from 'vue'

const props = defineProps({
  user: Object,
})

const ageColor = computed(() => {
  return props.user.isOlder() ? 'red' : 'green'
})

const onlineColor = computed(() => {
  return props.user.isOn ? '#ffde00' : '#eff4b4'
})

const onlineText = computed(() => {
  return props.user.isOn ? 'Online' : 'Offline'
})
</script>

<template>
  <div class="card-title-section">
    <span class="card-title-large"> {{ user.name }} </span>
    <span class="card-title-desc" :style="{ color: ageColor }">
      {{ user.age }}
    </span>
  </div>
  <span class="text-status" :style="{ color: onlineColor }">
    {{ onlineText }}
  </span>
  <span class="card-list-title"> Skills: </span>
  <ul class="card-list-text">
    <li v-for="(skill, index) in user.skills" :key="index">
      {{ skill }}
    </li>
  </ul>
  <CardButtons :user="user" />
</template>

<style scoped>
.text-status {
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
