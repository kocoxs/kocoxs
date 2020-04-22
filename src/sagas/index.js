import { all } from 'redux-saga/effects';
import { productSuscriber } from './products';
import { userSuscriber } from './users';
import { orderSuscriber } from './order';
import { tipsSuscriber } from './tips'
import { ordersSuscriber } from './orders'

export default function* rootSaga() {
  yield all([
    productSuscriber(),
    userSuscriber(),
    orderSuscriber(),
    tipsSuscriber(),
    ordersSuscriber()
  ]);
}