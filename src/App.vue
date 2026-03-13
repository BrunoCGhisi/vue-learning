<script setup>
import { ref } from 'vue';
import ButtonCounter from '@/components/ButtonCounter.vue'

const counter = ref(0);

function plusOne(){ counter.value++; }
function removeOne(){ counter.value--; }
function resetCounter(){ counter.value = 0; }

</script>

<template>

  <div class="main-container">
    <div class="header">
      <h1>Controller Buttons</h1>
      <p>The actual mountant of clicks is: <strong>{{counter}}</strong></p>
    </div>

    <div class="container">
      <ButtonCounter text="Plus" color="#00ffff" @clicked="plusOne" />
      <ButtonCounter text="Minus" color="#ff00ff" @clicked="removeOne" />
      <ButtonCounter text="Reset" color="#ffcc00" @clicked="resetCounter" />
    </div>

  </div>
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
