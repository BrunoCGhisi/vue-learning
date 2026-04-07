export const ibgeFormatters = {
  name: (data) => {
    if (!data || data.length === 0) return 0
    return data[0].res.reduce((acc, item) => acc + item.frequencia, 0)
  },

  uf: (data) => {
    if (!data || data.length === 0) return 0
  },

  census: (data) => {
    return data.total_populacao
  },
}
