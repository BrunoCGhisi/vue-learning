<script setup>
import { ref } from 'vue';
import ButtonCounter from '@/components/ButtonCounter.vue'
import ButtonDuplicater from '@/components/ButtonCounter.vue'


const counter = ref(0);
const duplicated = ref(0)

function plusOne(){ counter.value++; }
function removeOne(){
  if (counter.value<1) {
    alert("The counter cannot excess below 0!")
  }
  else {
    counter.value--;
  }
}
function resetCounter(){ counter.value = 0; }

function duplicate(){
  duplicated.value = counter.value *2;
}

</script>

<template>

  <div class="main-container">
    <div class="header">
      <h1>Controller Buttons</h1>
      <p>The actual mountant of clicks is: <strong>{{counter}}</strong></p>
      <p>The actual mountant of clicks is: <strong>{{duplicated}}</strong></p>
    </div>

    <div class="container">
      <ButtonCounter text="Plus" color="#00ffff" @clicked="plusOne" />
      <ButtonCounter text="Minus" color="#ff00ff" @clicked="removeOne" />
      <ButtonCounter text="Reset" color="#ffcc00" @clicked="resetCounter" />
    </div>
    <div class="container">
      <ButtonDuplicater text="Plus" color="#000" @clicked="duplicate" />
    </div>
  </div>


</template>

<style>

body{
  margin: 0;
  padding: 0;
  background: #f4f4bd;
  box-sizing: border-box
}

.main-container{
  padding: 20px 20px ;
}

.container {
  display: flex;
  flex-direction: row;
  background: #ecccd9;
  gap: 20px;
  justify-content: center;
}

</style>
