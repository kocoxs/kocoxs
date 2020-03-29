import _api from './config.js'

export default async function getAllProducts () {
    try {
        const response = await _api.get(`/product`)
        return response.data.products
    } catch (error) {
        return {error}
    }
}