<script setup>
defineProps({
  user: Object
})

</script>

<template>

  <div class="container-collum">
    <div class="container-title">
      Titulo
    </div>
    <div class="container" :style="{color: user.isOlder ? 'red' : 'green'}">
      {{user.name}}
      <span v-if="user.isOn" class="badge online">Online</span>
    </div>
    <div class="container">

    </div>

  </div>
</template>

<style scoped></style>
