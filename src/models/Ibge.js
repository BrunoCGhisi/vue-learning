import { ref } from 'vue'
import axios from 'axios'
import { ibgeFormatters } from '@/utils/ibgeFormatters.js'

export class Ibge {

  const findName = async (term) => {
    const url = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/"
    try {
      const newUrl = url + term
      const response = await axios.get(newUrl)
      return response[0].res.reduce((acc, item) => acc + item.frequencia, 0)
    } catch (err) {
      console.error('Error in search:', err)
      // result.value = 0
      return 0
    } finally {
      // loading.value = false
    }
  }
}

