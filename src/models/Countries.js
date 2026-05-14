import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'

export class Countries {
  static async cardCountryBasicInfo(name) {
    const listResult = []
    listResult.push(await Countries.searchOficialName(name))
    listResult.push(await Countries.searchCapitalByName(name))
    return listResult
  }

  static async SelectSearchCountriesNames() {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      return data.map((item) => item.name?.common).sort()
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async searchOficialName(name) {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      return (
        data.find((country) => country.name?.official?.toLowerCase() === name.toLowerCase())
          ?.capital?.[0] || 'Not found'
      )
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async searchCapitalByName(name) {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      return (
        data.find((country) => country.capital.toLowerCase() === name.toLowerCase())
          ?.capital?.[0] || 'Not found'
      )
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }
}
