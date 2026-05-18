import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'

export class Countries {
  static async cardCountryBasicInfo(selectedName) {
    const { data } = await axios.get(baseUrl)
    if (!data || data.length === 0) return 'Not found'

    const country = Countries.findCountryByName(selectedName, data)

    let currencyCode = Object.keys(country.currencies)[0]
    currencyCode = country.currencies[currencyCode]

    if (!country) {
      return []
    }

    return [
      {
        title: 'Official name:',
        result: country.name?.official,
      },
      {
        title: 'Capital:',
        result: country.capital?.[0],
      },
      {
        title: 'Currency name:',
        result: currencyCode.name,
      },
      {
        title: 'Currency symbol:',
        result: currencyCode.symbol,
      },
    ]
  }

  static findCountryByName(selectedName, data) {
    return data.find(
      (country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase(),
    )
  }

  static async cardCountrySameCurrency(selectedCurrency) {
    const { data } = await axios.get(baseUrl)
    const listCountries = await Countries.SearchCountryListByCurrency(selectedCurrency, data)

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

  static async searchCurrencyByName(selectedName, data) {
    try {
      const country = data.find(
        (country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase(),
      )

      return Object.values(country.currencies)[0]?.name || 'Does not have a currency'
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async searchCurrencySymbolByName(selectedName, data) {
    try {
      const country = data.find(
        (country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase(),
      )
      const currencyCode = Object.keys(country.currencies)[0]
      console.log(Object.keys(country.currencies))
      return country.currencies[currencyCode].symbol || 'Not found'
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async SearchCountryListByCurrency(selectedCurrency, data) {
    try {
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
