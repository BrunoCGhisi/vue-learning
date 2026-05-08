import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'

export class Countries {
  static async searchCountriesNames() {
    try {
      const { data } = await axios.get(baseUrl)

      if (!data || data.length === 0) return 0

      return data.map((item) => item.name?.common).sort()
    } catch (err) {
      console.error('Error in search:', err)
      return 0
    }
  }
}
