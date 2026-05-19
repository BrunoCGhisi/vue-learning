import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'

export class Countries {
  static findCountryByName(selectedName, data) {
    return data.find(
      (country) => country.name?.common?.toLowerCase() === selectedName.toLowerCase(),
    )
  }

  static verifyData(data) {
    return data && data.length > 0
  }

  static async selectCountriesNames() {
    try {
      let { data } = await axios.get(baseUrl)
      if (!Countries.verifyData(data)) {
        return []
      }
      return data.map((item) => item.name?.common).sort()
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }

  static async selectSearchCurrencies() {
    try {
      const { data } = await axios.get(baseUrl)

      if (!Countries.verifyData(data)) {
        return []
      }

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

  static async SearchCountryListByCurrency(selectedCurrency, data) {
    if (!Countries.verifyData(data)) {
      return []
    }

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
