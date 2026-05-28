<script setup>
import CardButtons from '@/components/Users/cardButtons/CardButtons.vue'
import { computed } from 'vue'

const props = defineProps({
  user: Object,
})

const ageColor = computed(() => {
  return props.user.isOlder() ? 'green' : 'red'
})

const onlineColor = computed(() => {
  return props.user.isOn ? '#ffde00' : '#eff4b4'
})

const onlineText = computed(() => {
  return props.user.isOn ? 'Online' : 'Offline'
})
</script>

<template>
  <v-card class="user-card" hover elevation="24">
    <v-card-title class="d-flex justify-space-between align-center" :style="{ paddingBottom: 0 }">
      {{ props.user.name }}
      <span :style="{ color: ageColor }"> {{ props.user.age }} </span>
    </v-card-title>
    <v-card-subtitle :style="{ color: onlineColor, paddingLeft: '1.2rem' }">
      {{ onlineText }}
    </v-card-subtitle>

    <v-card-text>
      <div class="card-list-title">Skills:</div>

      <ul class="card-list-text" style="margin-bottom: 0">
        <li v-for="(skill, index) in props.user.skills" :key="index">
          {{ skill }}
        </li>
      </ul>
    </v-card-text>
    <CardButtons :user="props.user" />
  </v-card>
</template>

<style scoped>
.user-card {
  width: 100%;

  display: flex;
  flex-direction: column;
}

.card-list-title {
  padding: 15px 00px 00px 00px;
  color: #ffde00;
  font-weight: bold;
  font-size: large;
}

.card-list-text {
  min-height: 60px;
  max-height: 60px;
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
