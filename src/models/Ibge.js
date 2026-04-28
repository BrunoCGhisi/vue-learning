import { ref } from 'vue'
import axios from 'axios'

export class Ibge {
  static async findName(term) {
    const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${term}`
    try {
      const response = await axios.get(url)
      const data = response.data

      if (!data || data.length === 0) return 0

      return data[0].res.reduce((acc, item) => acc + item.frequencia, 0)
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async findCitiesPerRegion(term) {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
    try {
      const response = await axios.get(url)
      const data = response.data

      if (!data || data.length === 0) return 0
      return (
        data
          .filter((item) => item.regiao?.nome?.toLowerCase() === term.toLowerCase())
          .map((item) => item.nome)
          .join(', ') || 'No states registered'
      )
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async findCapitalPerCountry(term) {
    const url = `https://servicodados.ibge.gov.br/api/v1/paises/${term}`
    try {
      const response = await axios.get(url)
      const data = response.data
      if (!data || data.length === 0) return 0

      return data[0].governo?.capital?.nome
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async findRankingNamePerDecade(term) {
    const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${term}`
    try {
      const response = await axios.get(url)
      const data = response.data

      if (!data || data.length === 0) return 0

      return data[0].res
        .slice(0, 10)
        .map((item) => `${item.nome} (#${item.ranking})`)
        .join('\n')
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }
}
