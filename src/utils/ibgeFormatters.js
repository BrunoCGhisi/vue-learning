export const ibgeFormatters = {
  list: (data) => {
    return data ? data.length : 0
  },

  name: (data) => {
    if (!data || data.length === 0) return 0
    return data[0].res.reduce((acc, item) => acc + item.frequencia, 0)
  },

  paisCapital: (data) => {
    if (!data || data.length === 0) return 0
    const pais = data[0]
    return pais.governo?.capital?.nome || 'No capital registered'
  },

  cityByRegion: (data, term) => {
    if (!data || data.length === 0) return 0
    return (
      data
        .filter((item) => item.regiao?.nome?.toLowerCase() === term.toLowerCase())
        .map((item) => item.nome)
        .join(', ') || 'Nenhum estado encontrado para esta região'
    )
  },
}
