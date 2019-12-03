import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #4d067c;
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  flex: 1,
})`
  flex: 1;
  height: 100%;
`;

export const ProductContainer = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const handleRarityColor = rarity => {
  switch (rarity) {
    case 'Epic':
      return '#CB37F1';
    case 'Legendary':
      return '#FF7605';
    case 'Rare':
      return '#0094FF';
    case 'Uncommon':
      return '#00AD11';
    default:
      return '#eee';
  }
};

export const Product = styled.View`
  background: #fff;
  max-height: 450px;
  height: 100%;
  width: 90%;
  margin: 10px 20px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-left-color: ${props => handleRarityColor(props.rarity)};
  border-left-width: 10px;
`;

export const ProductImage = styled.Image`
  max-height: 240px;
  width: 240px;
  height: 100%;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  color: #000;
  margin: 10px 20px;
`;

export const ProductInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
`;

export const RarityBadge = styled.View`
  background: ${props => handleRarityColor(props.rarity)};
  width: 50%;
  height: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RarityText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-right: 5px;
`;

export const ActionButton = styled(RectButton)`
  background: #0cca98;
  height: 36px;
  width: 100%;
  margin: 10px 0 0 0;
  justify-content: center;
  align-items: center;
`;

export const ActionButtonText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
`;
