import { LOGIN_USER, LOGOUT_USER } from '../actions/users'

export default function users (state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...action.users
            } 
        case LOGOUT_USER:
            return {} 
        default:
            return state
    }

}