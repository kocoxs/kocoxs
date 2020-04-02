import { LOGIN_USER, LOGOUT_USER, REMOVE_USER } from '../actions/users'

export default function users (state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            debugger
            return {
                ...action.users
            }
        case REMOVE_USER: 
        case LOGOUT_USER:
            return {} 
        default:
            return state
    }

}