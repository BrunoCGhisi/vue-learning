<script setup>
import axios from 'axios'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'

import { ref } from 'vue'

const props = defineProps(['title', 'placeholderTextfield', 'url'])

const searchTerm = ref('')
const result = ref('')
const searched = ref(false)

async function searchIbge() {
  const newUrl = props.url + searchTerm.value
  const response = await axios.get(newUrl)
  try {
    if (response.data.length > 0) {
      const dataName = response.data[0]

      const totalFrequency = dataName.res.reduce((acumulator, item) => {
        return acumulator + item.frequencia
      }, 0)

      result.value = totalFrequency
    } else {
      result.value = 0
    }
  } catch (error) {
    console.error('Error in searching for Names:', error)
    alert('Does not working /: ')
  } finally {
    searched.value = true
  }
}
</script>

<template>
  <div class="ibge-section">
    <div class="section-title">{{ title }}</div>
    <div>
      <input
        @input="searched = false"
        v-model="searchTerm"
        type="text"
        :placeholder="placeholderTextfield"
      />
    </div>
    <div>
      <div>
        <ButtonContrast text="Search" @clicked="searchIbge()" />
      </div>
      <div>
        <p v-if="searched">
          Searching the {{ title }} of: <strong>{{ searchTerm }}</strong> has
          <strong>{{ result }} results</strong>
        </p>
        <p v-else-if="searchTerm">
          Searching the {{ title }} of: <strong>{{ searchTerm }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-weight: bold;
  font-size: large;
}

.ibge-section {
  min-width: 47%;
  max-width: 47%;
  min-height: 250px;
  max-height: 250px;
  background: #1f1f1f;
  border-radius: 5px;
  padding: 10px;
  flex-direction: column;
  gap: 10vh 10px;
}
</style>
