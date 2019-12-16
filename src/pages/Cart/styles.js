import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #541bbd;
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const EmptyCart = styled.View`
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
`;

export const CartList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 100%;
  padding: 5px 15px 0 15px;
`;

export const Product = styled.View`
  background: #fff;
  margin: 4px 0 4px 0;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ProductImage = styled.Image`
  width: 95px;
  height: 95px;
`;

export const ProductInfo = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductQuantity = styled.Text`
  font-size: 13px;
  color: #c5c5c5;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  color: #541bbd;
`;

export const ProductActions = styled.View`
  margin: 0 10px 0 0;
  justify-content: space-around;
  align-items: center;
`;

export const ActionButton = styled(RectButton)`
  padding: 2px;
  background: #eee;
  border-radius: 25px;
`;

export const CheckoutContainer = styled.View`
  background: #5f2ff0;
  color: #fff;
  max-height: 25%;
  height: 100%;
  width: 100%;
  padding: 10px;
  justify-content: space-around;
`;

export const CheckoutTotal = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CheckoutButton = styled(RectButton)`
  background: #65baa9;
  height: 36px;
  width: 100%;
  margin: 10px 0 0 0;
  justify-content: center;
  align-items: center;
`;

export const CheckoutButtonText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;
