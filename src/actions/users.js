import userApi from '../utils/api/users'

export const LOGIN_USER = 'LOGIN_USER'

export function loginUser(users){
    return {
        type: LOGIN_USER,
        users
    }
}

export function login(email, password){
    return (dispatch) => {
        return userApi({email, password})
        .then((data)=>{
            dispatch(loginUser(data))
        })
    }
}