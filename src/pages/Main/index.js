import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

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
  ActionButtonQuantity,
  ActionButtonText,
} from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

function Main() {
  const productsQuantityInCart = useSelector(state => {
    return state.cart.reduce((items, product) => {
      items[product.id] = product.amount;
      return items;
    }, {});
  });

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/products');
      const productsData = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(Number(product.price)),
      }));
      setProducts(productsData);
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
    dispatch(CartActions.addToCartRequest(id));
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
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <RarityBadge rarity={item.rarity}>
                  <RarityText>{item.rarity}</RarityText>
                  {handleRarityStars(item.rarity).map(() => (
                    <Icon name="star" size={12} color="#fff" />
                  ))}
                </RarityBadge>
              </ProductInfo>

              <ActionButton onPress={() => handleAddToCart(item.id)}>
                <ActionButtonQuantity>
                  <Icon name="cart-arrow-down" size={15} color="#fff" />
                  {productsQuantityInCart[item.id] || 0}
                </ActionButtonQuantity>
                <ActionButtonText>Add to cart</ActionButtonText>
              </ActionButton>
            </Product>
          </ProductContainer>
        )}
      />
    </Container>
  );
}

export default Main;
