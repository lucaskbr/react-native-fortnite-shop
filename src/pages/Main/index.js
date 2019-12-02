import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ProductList,
  ProductContainer,
  Product,
  ProductInfo,
  ProductPrice,
  RarityBadge,
  RarityText,
  ProductTitle,
  ProductImage,
  ActionButton,
  ActionButtonText,
} from './styles';

import api from '../../services/api';

class Main extends Component {
  /* static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <Header />,
  }; */

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  handleRarityStars = rarity => {
    switch (rarity) {
      case 'Epic':
        return [1, 2, 3];
      case 'Legendary':
        return [1, 2];
      case 'Rare':
        return [1];
      case 'Uncommon':
        return [];
      default:
        return '#eee';
    }
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductList
          data={products}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductContainer>
              <Product rarity={item.rarity}>
                <ProductImage
                  source={{
                    uri: item.image,
                  }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductInfo>
                  <ProductPrice>{item.price}</ProductPrice>
                  <RarityBadge rarity={item.rarity}>
                    <RarityText>{item.rarity}</RarityText>
                    {this.handleRarityStars(item.rarity).map(star => (
                      <Icon name="star" size={12} color="#fff" />
                    ))}
                  </RarityBadge>
                </ProductInfo>

                <ActionButton>
                  <ActionButtonText>Add to cart</ActionButtonText>
                </ActionButton>
              </Product>
            </ProductContainer>
          )}
        />
      </Container>
    );
  }
}

export default Main;
