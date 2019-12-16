import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, Logo, CartContainer, CartSize } from './styles';

import logo from '../../assets/images/logo.png';

function Header() {
  const { navigate } = useNavigation();
  const cart = useSelector(state => state.cart);
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
      <CartContainer>
        <Icon
          name="shopping-basket"
          size={30}
          color="#fff"
          onPress={() => {
            navigate('Cart');
          }}
        />
        {cart.length > 0 && <CartSize>{cart.length}</CartSize>}
      </CartContainer>
    </Container>
  );
}

export default Header;
