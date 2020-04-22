import { all } from 'redux-saga/effects';
import { productSuscriber } from './products';

export default function* rootSaga() {
  yield all([
    productSuscriber()
  ]);
}