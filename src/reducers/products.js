import { RECIVE_PRODUCTS, DELETE_PRODUCTS, ADD_PRODUCTS, MODIFY_PRODUCTS } from '../actions/products'

export default function products (state = [], action) {
    switch (action.type) {
        case RECIVE_PRODUCTS:
            return action.products
        case DELETE_PRODUCTS:
            return state.filter((p) => p.id != action.product.id)
        case ADD_PRODUCTS:
            debugger
            return state.concat(action.product)
        case MODIFY_PRODUCTS:
            return state.map((item) => {
                if (item.id !== action.product.id) {
                  // This isn't the item we care about - keep it as-is
                  return item
                }
            
                // Otherwise, this is the one we want - return an updated value
                return {
                  ...item,
                  ...action.product
                }
            })
        default:
            return state
    }
}