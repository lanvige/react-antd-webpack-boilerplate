
const service = {
  async fetchRate (base = 'USD', target = 'GBP') {
    const url = `http://api.fixer.io/latest?base=${base}&symbols=${target}`
    console.log(url)
    const response = await fetch(url)

    const data = await response.json()

    const rates = data.rates
    const rate = rates[target]

    return rate
  }
}

export default service
