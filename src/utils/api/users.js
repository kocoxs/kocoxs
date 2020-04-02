import _api from './config.js'

export async function login ({email, password}) {   
    try {
        const response = await _api.post(`/login`, { email, password })
        const userdata = response.data
        _api.defaults.headers.common = {'Authorization': `Bearer ${userdata.token}`}
        return userdata
    } catch (error) {
        throw new Error ('Datos invalidos')
    }
}


export async function logout () {   
    try {
        const response = await _api.post(`/logout`)
        return response.data
    } catch (error) {
        throw new Error (error)
    }
}