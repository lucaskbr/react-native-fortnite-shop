import { all, takeLatest } from 'redux-saga/effects';

function* addToCart({ id }) {
  console.tron.log('Intercepted');
  return yield null;
}

export default all([takeLatest('@cart/ADD_TO_CART', addToCart)]);
