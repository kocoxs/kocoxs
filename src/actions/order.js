export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DISCARD_ORDER = 'DISCARD_ORDER'

export function addProduct (order) {
    return {
        type: ADD_PRODUCT,
        order,
    }
} 

export function removeProduct (order) {
    return {
        type: REMOVE_PRODUCT,
        order,
    }
} 

export function editProduct (order) {
    return {
        type: EDIT_PRODUCT,
        order,
    }
} 

export function discard(order = {}){
    return {
        type: DISCARD_ORDER,
        order
    }
}

export function addProducToOrder(product){
    return (dispatch) => {
        return dispatch(addProduct({
            product
        }))
    }
}

export function removeProducfromOrder(product){
    return (dispatch) => {
        return dispatch(removeProduct({product}))
    }
}

export function edditProducInOrder(product){
    return (dispatch) => {
        return dispatch(editProduct({product}))
    }
}

export function discardOrder(){
    return (dispatch) => {
        return dispatch(discard())
    }
}


