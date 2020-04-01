import _api from './config.js'

export async function getAllProducts () {
    try {
        const response = await _api.get(`/product`)
        return response.data
    } catch (error) {
        throw new Error('Datos invalidos') 
    }
}

export async function removeProduct (product) {
    try {
        const response = await _api.delete(`/product/${product.id}`)
        return response.data
    } catch (error) {
        throw new Error('Datos invalidos') 
    }
}


export async function createProduct (product) {
    try {
        
        let formData = new FormData()

        formData.append('icon', product.icon)
        formData.append('name', product.name)
        formData.append('price', product.price)
        
        const response = await _api.post(`/product`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Datos invalidos') 
    }
}


export async function editProduct (product) {
    try {

        let formData = new FormData()

        if(product.icon)
            formData.append('icon', product.icon)
        formData.append('name', product.name)
        formData.append('price', product.price)
        
        const response = await _api.patch(`/product/${product.id}`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Datos invalidos') 
    }
}
