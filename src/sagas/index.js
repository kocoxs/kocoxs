import { all } from 'redux-saga/effects';
import { productSuscriber } from './products';
import { userSuscriber } from './users';

export default function* rootSaga() {
  yield all([
    productSuscriber(),
    userSuscriber()
  ]);
}