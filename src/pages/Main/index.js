import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

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

import * as CartActions from '../../store/modules/cart/actions';

/* static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <Header />,
  }; */

function Main() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/products');
      setProducts(response.data);
    }

    fetchData();
  }, []);

  function handleRarityStars(rarity) {
    switch (rarity) {
      case 'Epic':
        return Array(3).fill('');
      case 'Legendary':
        return Array(2).fill('');
      case 'Rare':
        return Array(1).fill('');
      case 'Uncommon':
        return [];
      default:
        return '#eee';
    }
  }

  function handleAddToCart(id) {
    console.tron.log(`Add to cart -> ${id}`);
    dispatch(CartActions.addToCart(id));
  }

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
                  {handleRarityStars(item.rarity).map(() => (
                    <Icon name="star" size={12} color="#fff" />
                  ))}
                </RarityBadge>
              </ProductInfo>

              <ActionButton onPress={() => handleAddToCart(item.id)}>
                <View accessible>
                  <ActionButtonText>Add to cart</ActionButtonText>
                </View>
              </ActionButton>
            </Product>
          </ProductContainer>
        )}
      />
    </Container>
  );
}

export default Main;
