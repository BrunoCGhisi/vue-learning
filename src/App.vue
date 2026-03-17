<script setup>
import { ref } from 'vue';
import ButtonCounter from '@/components/ButtonCounter.vue'
import ButtonDuplicater from '@/components/ButtonCounter.vue'
import DividerLine from '@/components/DividerLine.vue'
import UserProfile from '@/components/UserProfile.vue'

import { User } from '@/models/User'
const dev1 = ref(new User(1, 'Zezinho', 25, ['Vue', 'Node'], true))
const dev2 = ref(new User(2, 'Luizinho', 15, ['HTML', 'CSS'], false))

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

    <div class="container-row">
      <ButtonCounter text="Plus" color="#00cccc" @clicked="plusOne" />
      <ButtonCounter text="Minus" color="#aa00aa" @clicked="removeOne" />
      <ButtonCounter text="Reset" color="#ffcc00" @clicked="resetCounter" />
    </div>
    <div class="container-row">
      <ButtonDuplicater text="Plus" color="#000" @clicked="duplicate" />
      <ButtonDuplicater text="Reset" color="#aaa" @clicked="resetDuplicated" />
    </div>

    <DividerLine />

    <UserProfile :user="dev1"/>
    <DividerLine />
    <UserProfile :user="dev2"/>

  </div>


</template>

<style>

</style>
