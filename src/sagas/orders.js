import { call, put, takeEvery, all} from 'redux-saga/effects';

import { apiGetAllOrder } from '../utils/api/order'
import { SAGA_RECIVE_ORDER, SAGA_TOOGLE, reciveOrders, showOrders } from '../actions/orders'

function* getAllOrders(){
    try {
        const {orders} = yield call(apiGetAllOrder)
        yield put(reciveOrders(orders));
    } catch (error) {
        
    }
}

function* toggleOrder({order}){
    try {
        yield put(showOrders(order))
    } catch (error) {
        
    }
}

function* watchGetAllOrders() {
    yield takeEvery(SAGA_RECIVE_ORDER, getAllOrders)
}

function* watchToggleOrder() {
    yield takeEvery(SAGA_TOOGLE, toggleOrder)
}

export function* ordersSuscriber() {
    yield all( [
        watchGetAllOrders(),
        watchToggleOrder()
    ])
}