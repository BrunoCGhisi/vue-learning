<script setup>
import { ref } from 'vue';
import { ButtonCounter } from '@/components/ButtonCounter.vue'

const counter = ref(0);

function plusOne(){ counter.value++; }
function removeOne(){ counter.value++; }
function resetCounter(){ counter.value = 0; }

</script>

<template>

  <body>
    <div class="header">
      <h1>Controller Buttons</h1>
      <p>The actual mountant of clicks is: <strong>{{counter}}</strong></p>
    </div>

    <div class="container">
      <button text="Plus" color="#00ffff" @click="plusOne"></button>
      <button text="Plus" color="#ff00ff" @click="removeOne"></button>
      <button text="Plus" color="#ffff00" @click="resetCounter"></button>
    </div>

  </body>
</template>

<style>

body{
  margin: 0;
  padding: 0;
  background: #fff;
}

.container {
  background: #e3e35f;
}

</style>
