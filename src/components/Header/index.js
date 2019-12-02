import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../assets/images/logo.png';

import { Container, Logo } from './styles';

class Header extends Component {
  render() {
    return (
      <Container>
        <Logo source={logo} resizeMode="contain" />
        <Icon name="shopping-basket" size={30} color="#fff" />
      </Container>
    );
  }
}

export default Header;
