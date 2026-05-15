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

  static async cardCountrySameCurrency(selectedCurrency) {
    const listCountries = await Countries.SearchCountryListByCurrency(selectedCurrency)
    return [
      {
        title: 'Total countries:',
        result: listCountries.length,
      },
      {
        title: 'Countries list:',
        result: listCountries.join(', '),
      },
    ]
  }

  static async SelectCountriesNames() {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      return data.map((item) => item.name?.common).sort()
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async SelectSearchCurrencies() {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      let currencies = data
        .flatMap((country) => Object.values(country.currencies || {}))
        .map((currency) => currency?.name)

      currencies = currencies.filter(
        (currency) => currencies.indexOf(currency) !== currencies.lastIndexOf(currency),
      )

      currencies = [...new Set(currencies)].sort()

      return currencies
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

  static async SearchCountryListByCurrency(selectedCurrency) {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      const countries = data
        .filter((country) => {
          const currencies = Object.values(country.currencies || {})
          return currencies.some((currency) => currency.name === selectedCurrency)
        })
        .map((country) => country.name?.common)
        .sort()

      return countries
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }
}
