import { RECIVE_PRODUCTS } from '../actions/products'

export default function products (state = [], action) {
    switch (action.type) {
        case RECIVE_PRODUCTS:
            return action.products
        default:
            return state
    }
}