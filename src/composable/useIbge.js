import { ref } from 'vue'
import axios from 'axios'
import { ibgeFormatters } from '@/utils/ibgeFormatters'

export function useIbge(baseUrl, type = 'list', filterLocal = false) {
  const result = ref(0)
  const loading = ref(false)
  const searched = ref(false)

  const search = async (term) => {
    if (!term) return
    loading.value = true
    searched.value = false

    try {
      const finalUrl = filterLocal ? baseUrl : baseUrl + term
      const response = await axios.get(finalUrl)

      const formatter = ibgeFormatters[type]

      result.value = formatter(response.data, term)

      searched.value = true
    } catch (err) {
      console.error('Error in search:', err)
      result.value = 0
    } finally {
      loading.value = false
    }
  }

  return { result, loading, searched, search }
}
