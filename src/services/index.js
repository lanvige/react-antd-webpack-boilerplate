
const service = {
  async fetchRate(base = 'USD', target = 'GBP') {
    const url = `http://api.fixer.io/latest?base=${base}&symbols=${target}`
    console.log(url);
    let response = await fetch(url)

    let data = await response.json();

    let rates = data.rates;
    let rate = rates[target];

    return rate;
  }
}

export default service;
