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
function resetDuplicated(){ duplicated.value = 0; }

function duplicate(){
  duplicated.value = duplicated.value+(counter.value *2);
}

</script>

<template>

  <div class="main-container">
    <div class="header">
      <h1>Controller Buttons</h1>
      <p>The actual mountant of clicks is: <strong> {{counter}} </strong></p>
      <p>The actual mountant of clicks is: <strong> {{duplicated}} </strong></p>
    </div>

    <div class="container">
      <ButtonCounter text="Plus" color="#00cccc" @clicked="plusOne" />
      <ButtonCounter text="Minus" color="#aa00aa" @clicked="removeOne" />
      <ButtonCounter text="Reset" color="#ffcc00" @clicked="resetCounter" />
    </div>
    <div class="container">
      <ButtonDuplicater text="Plus" color="#000" @clicked="duplicate" />
      <ButtonDuplicater text="Reset" color="#aaa" @clicked="resetDuplicated" />
    </div>
  </div>

</template>

<style>

.main-container{
  padding: 00px 20px ;
}

.container {
  display: flex;
  flex-direction: row;
  background: #1f1f1f;
  gap: 20px;
  justify-content: center;
}

</style>
