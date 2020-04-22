export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DISCARD_ORDER = 'DISCARD_ORDER'
export const ASIGN_TIP = 'ASIGN_TIP'
export const SAVE_ORDER = 'SAVE_ORDER'

export const SAGA_PRODUCT_TO_ORDER = 'SAGA_PRODUCT_TO_ORDER'
export const SAGA_REMOVE_PRODUCT_FROM_ORDER = 'SAGA_REMOVE_PRODUCT_FROM_ORDER'
export const SAGA_EDIT_PRODUCT_IN_ORDER = 'SAGA_EDIT_PRODUCT_IN_ORDER'
export const SAGA_DISCARD_ORDER = 'SAGA_DISCARD_ORDER'
export const SAGA_TIP = 'SAGA_TIP'
export const SAGA_SAVING_ORDER = 'SAGA_SAVING_ORDER'

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

export function asignTip(tip){
    return {
        type: ASIGN_TIP,
        tip
    }
}

export function saveOrder(order){
    return {
        type:SAVE_ORDER,
        order
    }
}

export function addProducToOrder(product){
    return {
        type:SAGA_PRODUCT_TO_ORDER,
        product
    }
    
}

export function removeProducfromOrder(product){
    return {
        type:SAGA_REMOVE_PRODUCT_FROM_ORDER,
        product
    }
    
}

export function editProducInOrder(product){
    return {
        type:SAGA_EDIT_PRODUCT_IN_ORDER,
        product
    }
    
}

export function discardOrder(){
    return {
        type:SAGA_DISCARD_ORDER,

    }
    
}

export function setTip(tip){
    return {
        type:SAGA_TIP,
        tip
    }
    
}

export function savingOrder(order){
    return {
        type:SAGA_SAVING_ORDER,
        order
    }
    
}