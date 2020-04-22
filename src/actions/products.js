export const RECIVE_PRODUCTS = 'RECIVE_PRODUCTS'
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS'
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const MODIFY_PRODUCTS = 'MODIFY_PRODUCTS' 
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SAGAS_DELETE_PRODUCT = 'SAGAS_DELETE_PRODUCT'
export const SAGAS_CREATE_PRODUCT = 'SAGAS_CREATE_PRODUCT'
export const SAGAS_EDIT_PRODUCT = 'SAGAS_EDIT_PRODUCT'

export function receiveProducts (products) {
    return {
        type: RECIVE_PRODUCTS,
        products,
    }
} 

export function deleteProducts (product) {
    return {
        type: DELETE_PRODUCTS,
        product,
    }
} 

export function addProduct(product) {
    return {
        type: ADD_PRODUCTS,
        product,
    }
}

export function modifyProduct(product) {
    return {
        type: MODIFY_PRODUCTS,
        product,
    }
}

export function getProducts(){
    return { type: GET_PRODUCTS }
}

export function deleteProduct(product){
    return { 
        type: SAGAS_DELETE_PRODUCT,
        product
    }
}

export function createProduct(product){
    return { 
        type: SAGAS_CREATE_PRODUCT,
        product
    }
    
}

export function editProduct(product){
    return { 
        type: SAGAS_EDIT_PRODUCT,
        product
    }
    
}
