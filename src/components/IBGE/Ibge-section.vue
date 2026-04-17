<script setup>
import { ref } from 'vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import { Ibge } from '@/models/Ibge.js'

const props = defineProps(['title', 'placeholderTextField', 'methodName'])

const searchTerm = ref('')
const result = ref('')
const loading = ref(false)
const searched = ref(false)

async function handleSearch() {
  if (!searchTerm.value || loading.value) return

  loading.value = true
  searched.value = false

  try {
    const method = Ibge[props.methodName]
    if (method) {
      result.value = await method(searchTerm.value)
      searched.value = true
    } else {
      console.error(`Method ${props.methodName} not found ): `)
    }
  } catch (error) {
    console.log(error, 'error!')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="ibge-section">
    <div class="section-title">{{ title }}</div>

    <div class="input-group">
      <input
        v-model="searchTerm"
        type="text"
        :placeholder="placeholderTextField"
        @keyup.enter="handleSearch"
      />
      <ButtonContrast :text="loading ? '...' : 'Search'" @clicked="handleSearch" />
    </div>

    <div class="result-area">
      <p v-if="searched">
        Results for <strong>{{ searchTerm }}</strong
        >:
        <strong>{{ result.toLocaleString('pt-BR') }}</strong>
      </p>
      <p v-else-if="searchTerm && !loading">Ready to search...</p>
    </div>
  </div>
</template>

<style scoped>
.ibge-section {
  min-width: 47%;
  background: #1f1f1f;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.input-group {
  display: flex;
  gap: 10px;
}
input {
  flex: 1;
  padding: 8px;
  background: #000;
  color: #fff;
  border: 1px solid #333;
}
</style>
