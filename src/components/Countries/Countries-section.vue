<script setup>
import { ref, onMounted, computed } from 'vue'
import { Countries } from '@/models/Countries.js'

const props = defineProps(['titleCard', 'subtitleCard', 'methodName'])
const optionsList = ref([])
const selectedCountry = ref('')

onMounted(async () => {
  optionsList.value = await Countries[props.methodName]()
})
</script>

<template>
  <v-container>
    <v-card :title="titleCard" :subtitle="subtitleCard">
      <v-row class="ml-5 mt-5">
        <v-col cols="4">
          <v-select label="Select country" :items="optionsList" v-model="selectedCountry" />
        </v-col>
        <v-col>
          <div>nomeOficial</div>
          <div>resultadoNomeOficial</div>
        </v-col>
      </v-row>

      <v-row class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div>capital</div>
          <div>resultado Capital</div>
        </v-col>
      </v-row>

      <v-row class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div>moeda</div>
          <div>resultadoMoeda</div>
        </v-col>
      </v-row>

      <v-row class="ml-5 mt-5">
        <v-col cols="4" />
        <v-col>
          <div>simbolo</div>
          <div>símbolo Moeda</div>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-card>
  </v-container>
</template>

<style scoped></style>
