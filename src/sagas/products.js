import { call, put, takeEvery, all} from 'redux-saga/effects';
import  { getAllProducts } from '../utils/api/products'
import { GET_PRODUCTS, RECIVE_PRODUCTS } from '../actions/products'

export function* getProducts() {
    try {
        const { products } = yield call(getAllProducts)
        console.log("LAMANDO a los productos:", products);
        yield put({type: RECIVE_PRODUCTS, products});
    } catch (error) {
        yield put({type: RECIVE_PRODUCTS, products: []});
    }
    yield put({ type: 'INCREMENT' })
}

function* watchGetProducts() {
    yield takeEvery(GET_PRODUCTS, getProducts)
}

export function* productSuscriber() {
    yield all( [
        watchGetProducts()
    ])
}