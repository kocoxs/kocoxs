import { apiGetAllOrder } from '../utils/api/order'

export const RECIVE_ORDERS = 'RECIVE_ORDERS'
export const SHOW_ORDERS = 'SHOW_ORDERS'

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
    return (dispatch) => {
        return apiGetAllOrder()
        .then(({orders})=>{
            dispatch(reciveOrders(orders))
        })
    }
}

export function toggleShow(order){
    return (dispatch) => dispatch(showOrders(order))
}