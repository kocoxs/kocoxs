import { call, put, takeEvery, all} from 'redux-saga/effects';

import  {
    getAllProducts, 
    removeProduct, 
    createProduct as apiCreateProduct, 
    editProduct as apiEditProduct
} from '../utils/api/products'

import { 
    GET_PRODUCTS, 
    receiveProducts, 
    SAGAS_DELETE_PRODUCT, 
    deleteProducts,
    SAGAS_CREATE_PRODUCT,
    addProduct,
    SAGAS_EDIT_PRODUCT,
    modifyProduct 
} from '../actions/products'

export function* getProducts() {
    try {
        const { products } = yield call(getAllProducts)
        yield put( receiveProducts(products));
    } catch (error) {
        yield put(receiveProducts([]));
    }
}

export function* deleteProduct({product}){
    try {
        const response = yield call(removeProduct, product)
        yield put( deleteProducts(response.product));
    } catch (error) {
        
    }
}

export function* createProduct({product}){
    try {
        const response = yield call(apiCreateProduct, product)
        yield put( addProduct(response.product));
    } catch (error) {
        
    }
}

export function* editProduct({product}){
    try {
        const response = yield call(apiEditProduct, product)
        yield put( modifyProduct(response.product));
    } catch (error) {
        
    }
}

function* watchGetProducts() {
    yield takeEvery(GET_PRODUCTS, getProducts)
}

function* watchDeleteProduct() {
    yield takeEvery(SAGAS_DELETE_PRODUCT, deleteProduct)
}

function* watchCreateProduct() {
    yield takeEvery(SAGAS_CREATE_PRODUCT, createProduct)
}

function* watchEditProduct() {
    yield takeEvery(SAGAS_EDIT_PRODUCT, editProduct)
}

export function* productSuscriber() {
    yield all( [
        watchGetProducts(),
        watchDeleteProduct(),
        watchCreateProduct(),
        watchEditProduct()
    ])
}