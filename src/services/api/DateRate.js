import Axios from 'axios';

const BASE_URL = 'https://api.exchangeratesapi.io'

const userSettingsApi = {}

userSettingsApi.DateRate = date => {
    return new Promise((resolve, reject) => {
        Axios
            .get(`${BASE_URL}/${date}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default userSettingsApi