<script setup>
defineProps({
  user: Object,
})
</script>

<template>
  <div class="container-collum">
    <div class="container-title">{{ user.name }}</div>
    <div class="container-collum">
      <span :style="{ color: user.isOlder ? 'red' : 'green' }">Age: {{ user.age }}</span>
      <span v-if="user.isOn" class="text-true">ONline</span>
      <span v-else class="text-false">OFFline</span>
      <ul>
        <li v-for="(skill, index) in user.skills" :key="index">
          {{skill}}
        </li>
      </ul>

      <button @click="user.changeStatus()"> Alter Status</button>
    </div>
  </div>
</template>

<style scoped>
.text-true {
  color: #ffde00;
}

.text-false {
  color: #eff4b4;
}
</style>
