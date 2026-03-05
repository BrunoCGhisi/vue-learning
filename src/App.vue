<script setup>
import { ref } from 'vue';

const contador = ref(0);

function plusOne(){
  contador.value++;

}
</script>

<template>

  <body>
    <div class="header">
      <h1>Hello World!</h1>
    </div>

    <div class="container">
      <div class="content">
        <p>The actual mountant of clicks is: <strong>{{contador}}</strong></p>
      </div>
      <div>
        <button @click="plusOne">+++</button>
      </div>
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
