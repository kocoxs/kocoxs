import { call, put, takeEvery, all} from 'redux-saga/effects';

import {
    SAGA_LOGIN_USER,
    SAGA_LOGOUT_USER,
    loginUser,
    logoutUser,
} from '../actions/users'

import { login as apiLogin, logout as apiLogout } from '../utils/api/users'

export function* login({user}){
    try {
        console.log("USER:",user);
        debugger;
        const data = yield call(apiLogin, {...user})
        yield put( loginUser(data));
    } catch (error) {
        
    }
}

export function* logout(){
    try {
        console.log("AQUI Borro")
        yield call(apiLogout)
        yield put( logoutUser());
    } catch (error) {
        
    }
}

function* watchLogin() {
    yield takeEvery(SAGA_LOGIN_USER, login)
}

function* watchLogout() {
    yield takeEvery(SAGA_LOGOUT_USER, logout)
}

export function* userSuscriber() {
    yield all( [
        watchLogin(),
        watchLogout()
    ])
}