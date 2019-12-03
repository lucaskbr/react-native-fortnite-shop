import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #9a24d4;
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: 60px;
`;

export const Logo = styled.Image`
  flex: 1;
  width: 100%;
  height: 24;
`;

export const CartContainer = styled.View``;

export const CartSize = styled.Text`
  color: #fff;
  font-size: 15px;
  position: absolute;
  right: -10px;
  background: red;
  border: 1px solid red;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  text-align: center;
`;
