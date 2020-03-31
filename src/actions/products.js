import  getAllProducts from '../utils/api/products'

export const RECIVE_PRODUCTS = 'RECIVE_PRODUCTS'

export function receivePolls (products) {
    return {
        type: RECIVE_PRODUCTS,
        products,
    }
} 

export function getProducts(){
    return (dispatch) => {
        return getAllProducts()
        .then(({products})=>{
            dispatch(receivePolls(products))
        })
        .catch((error) => {
            dispatch(receivePolls([]))
            throw new Error('Error')
        })
    }
}