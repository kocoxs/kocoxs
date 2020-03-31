import { LOGIN_USER } from '../actions/users'

export default function users (state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...action.users
            }  
        default:
            return state
    }

}