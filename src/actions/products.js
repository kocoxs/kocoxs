import  {getAllProducts, removeProduct, createProduct as apiCreateProduct, editProduct as apiEditProduct} from '../utils/api/products'

export const RECIVE_PRODUCTS = 'RECIVE_PRODUCTS'
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS'
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const MODIFY_PRODUCTS = 'MODIFY_PRODUCTS' 

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
    return (dispatch) => {
        return getAllProducts()
        .then(({products})=>{
            dispatch(receiveProducts(products))
        })
        .catch((error) => {
            dispatch(receiveProducts([]))
            throw new Error(error)
        })
    }
}

export function deleteProduct(product){
    return (dispatch) => {
        return removeProduct(product)
        .then(({product})=>{
            dispatch(deleteProducts(product))
        })
    }
}

export function createProduct(product){
    return (dispatch) => {
        return apiCreateProduct(product)
        .then(({product})=>{
            dispatch(addProduct(product))
        })
    }
}

export function editProduct(product){
    return (dispatch) => {
        return apiEditProduct(product)
        .then(({product})=>{
            dispatch(modifyProduct(product))
        })
    }
}
