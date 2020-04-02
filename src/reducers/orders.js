import { RECIVE_ORDERS, SHOW_ORDERS } from '../actions/orders'

export default function orders (state = {}, action) {
    switch (action.type) {
        case RECIVE_ORDERS:
            return action.orders.map((order) => {
                if(!order.show){
                    order.show = false
                }
                return order
            })
        case SHOW_ORDERS:
            return state.map((order) => {
                if(order.id === action.order.id){
                    order.show = !order.show
                }
                return order
            })
        default:
            return state
    }
}