import Axios from 'axios';

const BASE_URL = 'https://api.exchangeratesapi.io/history'

const userSettingsApi = {}

userSettingsApi.PeriodeRate = (startDate, endDate) => {
    return new Promise((resolve, reject) => {
        Axios
            .get(`${BASE_URL}?start_at=${startDate}&end_at=${endDate}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

userSettingsApi.PeriodeSymbolsRate = (startDate, endDate, symbols) => {
    return new Promise((resolve, reject) => {
        Axios
            .get(`${BASE_URL}?start_at=${startDate}&end_at=${endDate}&symbols=${symbols}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default userSettingsApi