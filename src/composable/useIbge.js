import { ref } from 'vue'
import axios from 'axios'
import { ibgeFormatters } from '@/utils/ibgeFormatters'

export function useIbge(baseUrl, type = 'list') {
  const result = ref(0)
  const loading = ref(false)
  const searched = ref(false) // Adicionei para controlar o v-if da resposta

  const search = async (term) => {
    if (!term) return
    loading.value = true
    searched.value = false

    try {
      const response = await axios.get(baseUrl + term)
      const formatter = ibgeFormatters[type]
      result.value = formatter(response.data)
      searched.value = true
    } catch (err) {
      console.error('Erro na busca IBGE:', err)
      result.value = 0
    } finally {
      loading.value = false
    }
  }

  return { result, loading, searched, search }
}
