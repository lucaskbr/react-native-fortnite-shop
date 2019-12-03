import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../assets/images/logo.png';

import { Container, Logo, CartContainer, CartSize } from './styles';

function Header() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
      <CartContainer>
        <Icon name="shopping-basket" size={30} color="#fff" />
        <CartSize>1</CartSize>
      </CartContainer>
    </Container>
  );
}

export default Header;
