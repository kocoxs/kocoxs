import { ADD_PRODUCT } from '../actions/order'

export default function products (state = {}, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            const order = {...state}
            if(order.products)
                order.products = order.products.concat([action.order.product])
            else
                order.products = [action.order.product]
            return order
        default:
            return state
    }
}