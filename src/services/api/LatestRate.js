import Axios from 'axios';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

const userSettingsApi = {}

userSettingsApi.LatestRate = () => {
    return new Promise((resolve, reject) => {
        Axios
            .get(BASE_URL)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

userSettingsApi.BaseRate = base => {
    return new Promise((resolve, reject) => {
        Axios
            .get(`${BASE_URL}?base=${base}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

userSettingsApi.SymbolsRate = symbols => {
    return new Promise((resolve, reject) => {
        Axios
            .get(`${BASE_URL}?symbols=${symbols}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default userSettingsApi