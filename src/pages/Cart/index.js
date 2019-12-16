import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { updateAmountRequest } from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  EmptyCart,
  EmptyCartText,
  CartList,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductActions,
  ActionButton,
  ProductQuantity,
  CheckoutContainer,
  CheckoutTotal,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const totalPrice = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  );

  const dispatch = useDispatch();

  function incrementAmount(id, amount) {
    dispatch(updateAmountRequest(id, amount + 1));
  }

  function decreaseAmount(id, amount) {
    dispatch(updateAmountRequest(id, amount - 1));
  }

  return (
    <Container>
      {cart <= 0 ? (
        <EmptyCart>
          <Icon name="cart-off" size={100} color="#fff" />
          <EmptyCartText>Your cart is empty!</EmptyCartText>
        </EmptyCart>
      ) : (
        <>
          <CartList
            data={cart}
            key={item => item.id}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Product>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfo>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductQuantity>Quantity: {item.amount}</ProductQuantity>
                  <ProductPrice>{item.subtotal}</ProductPrice>
                </ProductInfo>
                <ProductActions>
                  <ActionButton
                    onPress={() => incrementAmount(item.id, item.amount)}
                  >
                    <Icon name="plus" size={25} />
                  </ActionButton>
                  <ActionButton
                    onPress={() => decreaseAmount(item.id, item.amount)}
                  >
                    <Icon name="minus" size={25} />
                  </ActionButton>
                </ProductActions>
              </Product>
            )}
          />
          <CheckoutContainer>
            <CheckoutTotal>Total: {totalPrice}</CheckoutTotal>
            <CheckoutButton>
              <CheckoutButtonText>Checkout</CheckoutButtonText>
            </CheckoutButton>
          </CheckoutContainer>
        </>
      )}
    </Container>
  );
}

export default Cart;
