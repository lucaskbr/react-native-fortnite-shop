import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import {
  addToCartSuccess,
  updateAmountSuccess,
  removeFromCart,
} from './actions';

import api from '../../../services/api';

import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const productExist = yield select(state =>
    state.cart.find(item => item.id === id)
  );

  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  const stockAmount = yield call(api.get, `/stock/${id}`);

  if (currentAmount > stockAmount) {
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    try {
      const response = yield call(api.get, `/products/${id}`);
      const product = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price),
      };

      yield put(addToCartSuccess(product));
    } catch (err) {
      // Error when requesting an Api
    }
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    yield put(removeFromCart(id));
  } else {
    const stock = yield call(api.get, `/stock/${id}`);

    // Toast
    if (stock > amount) return;

    yield put(updateAmountSuccess(id, amount));
  }
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
