import { apiGetAllOrder } from '../utils/api/order'

export const RECIVE_ORDERS = 'RECIVE_ORDERS'

export function reciveOrders (orders) {
    return {
        type: RECIVE_ORDERS,
        orders
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