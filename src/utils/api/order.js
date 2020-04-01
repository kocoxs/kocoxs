import _api from './config.js'

export async function createOrder (order) {
    try {
        const response = await _api.post(`/order`, order)
        return response.data
    } catch (error) {
        throw new Error('Datos invalidos') 
    }
}

export async function apiGetAllOrder() {
    try {
        const response = await _api.get(`/order`)
        return response.data
    } catch (error) {
        throw new Error('Datos invalidos') 
    }
}