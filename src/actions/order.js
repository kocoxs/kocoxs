export const ADD_PRODUCT = 'ADD_PRODUCT'

export function addProduct (order) {
    return {
        type: ADD_PRODUCT,
        order,
    }
} 

export function addProducToOrder(product){
    return (dispatch) => {
        return dispatch(addProduct({
            product
        }))
    }
}