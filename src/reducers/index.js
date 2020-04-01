import { combineReducers } from 'redux'
import products from './products'
import users from './users'
import order from './order'
import orders from './orders'
import tips from './tips'

export default combineReducers({
    products,
    users,
    order,
    orders,
    tips
})