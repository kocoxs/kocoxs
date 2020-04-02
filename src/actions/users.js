import { login as apiLogin, logout as apiLogout } from '../utils/api/users'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function loginUser(users){
    return {
        type: LOGIN_USER,
        users
    }
}

export function logoutUser(users){
    return {
        type: LOGOUT_USER,
        users
    }
}

export function login(email, password){
    return (dispatch) => {
        return apiLogin({email, password})
        .then((data)=>{
            dispatch(loginUser(data))
        })
    }
}

export function logout(){
    return (dispatch) => {
        return apiLogout()
        .then(()=>{
            dispatch(logoutUser())
        })
        .catch((error) => { 
            throw new Error(error)
        })
    }
}