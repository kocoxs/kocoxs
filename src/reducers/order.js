import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT, DISCARD_ORDER } from '../actions/order'

export default function products (state = {}, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            const order = {...state}
            if(order.products){
                const index = order.products.findIndex((p) => p.id === action.order.product.id )
                if(index !== -1)
                    order.products[index].qty += action.order.product.qty
                else
                    order.products = order.products.concat(action.order.product)
            }
            else{
                order.products = [action.order.product]
            }
            return order
        case REMOVE_PRODUCT:
            return { ...state, products: state.products.filter((p) => p.id !== action.order.product.id)}
        case EDIT_PRODUCT:
            const orderEdit = {...state}
            const index = orderEdit.products.findIndex((p) => p.id === action.order.product.id )
            orderEdit.products[index].qty = action.order.product.qty;
            return orderEdit
        case DISCARD_ORDER:
            return {}
        default:
            return state
    }
}