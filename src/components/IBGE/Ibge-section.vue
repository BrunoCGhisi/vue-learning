<script setup>
import { ref } from 'vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import { useIbge } from '@/Composable/useIbge.js'

// Padronize o nome aqui
const props = defineProps(['title', 'placeholderTextField', 'url', 'type'])

const searchTerm = ref('')
const { result, loading, searched, search } = useIbge(props.url, props.type)
</script>

<template>
  <div class="ibge-section">
    <div class="section-title">{{ title }}</div>

    <div class="input-group">
      <input
        v-model="searchTerm"
        type="text"
        :placeholder="placeholderTextField"
        @keyup.enter="search(searchTerm)"
      />
      <ButtonContrast :text="loading ? '...' : 'Search'" @clicked="search(searchTerm)" />
    </div>

    <div class="result-area">
      <p v-if="searched">
        Results for <strong>{{ searchTerm }}</strong
        >:
        <strong>{{ result.toLocaleString('pt-BR') }}</strong>
      </p>
      <p v-else-if="searchTerm && !loading">
        Ready to search for <strong>{{ searchTerm }}</strong
        >...
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Seu CSS de 47% de largura e estilos dark */
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
