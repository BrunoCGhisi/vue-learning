<script setup>
import { ref } from 'vue'
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import { Ibge } from '@/models/Ibge.js'
import { TextFieldPrimary } from '@/components/Commun/Vuetify/index.js'
import { ButtonTonalPrimary } from '@/components/Commun/Vuetify/buttons/index.js'

const props = defineProps(['title', 'placeholderTextField', 'methodName', 'hintText', 'labelText'])

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
  <v-card>
    <v-card-title> {{ props.title }} </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <textFieldPrimary
              type="text"
              :label="props.labelText"
              :v-model="props.searchTerm"
              :placeholder="props.placeholderTextField"
              :hint="props.hintText"
              @keyup.enter="handleSearch"
            />
          </v-col>
          <v-col>
            <button-tonal-primary text="aaaaa"> </button-tonal-primary>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
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

.result-area strong {
  white-space: pre-line;
}
</style>
