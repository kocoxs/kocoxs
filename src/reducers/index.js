import { combineReducers } from 'redux'
import products from './products'
import users from './users'
import order from './order'

export default combineReducers({
    products,
    users,
    order
})