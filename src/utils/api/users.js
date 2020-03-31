import _api from './config.js'

export default async function login ({email, password}) {   
    try {
        const response = await _api.post(`/login`, { email, password })
        const userdata = response.data
        _api.defaults.headers.common = {'Authorization': `Bearer ${userdata.token}`}
        return userdata
    } catch (error) {
        throw new Error ('Datos invalidos')
    }
}
