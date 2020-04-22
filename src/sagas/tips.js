import { call, put, takeEvery, all} from 'redux-saga/effects';

import {SAGAS_TIPS, getTips} from '../actions/tips'
import apiGetTips from '../utils/api/tips'

function* sagasGetTips(){
    try {
        const {tips} = yield call(apiGetTips)
        yield put(getTips(tips));
    } catch (error) {
        
    }
}

function* watchGetTips() {
    yield takeEvery(SAGAS_TIPS, sagasGetTips)
}

export function* tipsSuscriber() {
    yield all( [
        watchGetTips()
    ])
}