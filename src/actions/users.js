export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const SAGA_LOGIN_USER = 'SAGA_LOGIN_USER'
export const SAGA_LOGOUT_USER = 'SAGA_LOGOUT_USER'

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

export function removeUser(users){
    return {
        type: REMOVE_USER,
        users
    }
}

export function login(email, password){
    return {
        type: SAGA_LOGIN_USER,
        user: {
            email,
            password
        }
    }
}

export function logout(){
    return {
        type: SAGA_LOGOUT_USER
    }
}

export function deleteSeSion() {
    return (dispatch) => dispatch(removeUser({}))
}