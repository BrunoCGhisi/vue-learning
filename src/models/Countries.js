import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'

export class Countries {
  static async cardCountryBasicInfo(selectedName) {
    return [
      {
        title: 'Official name:',
        result: await Countries.searchOfficialName(selectedName),
      },
      {
        title: 'Capital:',
        result: await Countries.searchCapitalByName(selectedName),
      },
      {
        title: 'Currency name:',
        result: await Countries.searchCurrencyByName(selectedName),
      },
      {
        title: 'Currency symbol:',
        result: await Countries.searchCurrencySymbolByName(selectedName),
      },
    ]
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

  static async searchOfficialName(selectedName) {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 'Not found'

      return (
        data.find((country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase())
          ?.name?.official || 'Not found'
      )
    } catch (err) {
      console.error('Error in search:', err)
      return 'Not found'
    }
  }

  static async searchCapitalByName(selectedName) {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      return (
        data.find((country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase())
          ?.capital?.[0] || 'Does not have a capital'
      )
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async searchCurrencyByName(selectedName) {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      const country = data.find(
        (country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase(),
      )

      return Object.values(country.currencies)[0]?.name || 'Does not have a currency'
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async searchCurrencySymbolByName(selectedName) {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      const country = data.find(
        (country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase(),
      )

      return Object.values(country.currencies)[0]?.symbol || 'Does not have a currency'
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }
}
