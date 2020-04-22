import { call, put, takeEvery, all} from 'redux-saga/effects';
import { createOrder } from '../utils/api/order'
import {
    SAGA_PRODUCT_TO_ORDER,
    SAGA_REMOVE_PRODUCT_FROM_ORDER,
    SAGA_EDIT_PRODUCT_IN_ORDER,
    SAGA_DISCARD_ORDER,
    SAGA_TIP,
    SAGA_SAVING_ORDER,
    addProduct,
    removeProduct,
    editProduct,
    discard,
    asignTip,
    saveOrder
} from '../actions/order'

export function* addProducToOrder ({product}){
    try {
        yield put( addProduct({product}));
    } catch (error) {
        throw new Error(error)
    }
}

export function* removeProducfromOrder ({product}){
    try {
        yield put(removeProduct({product}));
    } catch (error) {
        throw new Error(error)
    }
    return (dispatch) => {
        return dispatch()
    }
}

export function* editProducInOrder ({product}){
    try {
        yield put( editProduct({product}));
    } catch (error) {
        throw new Error(error)
    }
}

export function* discardOrder (){
    try {
        yield put(discard());
    } catch (error) {
        throw new Error(error)
    }
}

export function* setTip ({tip}){
    try {
        yield put(asignTip(tip));
    } catch (error) {
        throw new Error(error)
    }
}

export function* savingOrder ({order}){
    try {
        const {result} = yield call(createOrder, order)
        console.log("RESULT: ", result)
        yield put(saveOrder(result));
    } catch (error) {
        throw new Error(error)
    }
}


function* watchAddProducToOrder() {
    yield takeEvery(SAGA_PRODUCT_TO_ORDER, addProducToOrder)
}

function* watchRemoveProducfromOrder() {
    yield takeEvery(SAGA_REMOVE_PRODUCT_FROM_ORDER, removeProducfromOrder)
}

function* watchEditProducInOrder(){
    yield takeEvery(SAGA_EDIT_PRODUCT_IN_ORDER, editProducInOrder)
}

function* watchDiscardOrder(){
    yield takeEvery(SAGA_DISCARD_ORDER, discardOrder)
}

function* watchSetTip(){
    yield takeEvery(SAGA_TIP, setTip)
}

function* watchSavingOrder(){
    yield takeEvery(SAGA_SAVING_ORDER, savingOrder)
}

export function* orderSuscriber() {
    yield all( [
        watchAddProducToOrder(),
        watchRemoveProducfromOrder(),
        watchEditProducInOrder(),
        watchDiscardOrder(),
        watchSetTip(),
        watchSavingOrder()
    ])
}