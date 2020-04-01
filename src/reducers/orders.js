import { RECIVE_ORDERS } from '../actions/orders'

export default function orders (state = {}, action) {
    switch (action.type) {
        case RECIVE_ORDERS:
            return action.orders
        default:
            return state
    }
}