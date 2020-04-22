

export const RECIVE_ORDERS = 'RECIVE_ORDERS'
export const SHOW_ORDERS = 'SHOW_ORDERS'
export const SAGA_RECIVE_ORDER = 'SAGA_RECIVE_ORDER'
export const SAGA_TOOGLE = 'SAGA_TOOGLE'

export function reciveOrders (orders) {
    return {
        type: RECIVE_ORDERS,
        orders
    }
}

export function showOrders (order) {
    return {
        type: SHOW_ORDERS,
        order
    }
}

export function getOrders(){
    return{
        type: SAGA_RECIVE_ORDER
    }
}

export function toggleShow(order){
    return {
        type:SAGA_TOOGLE,
        order
    }
}