import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #541bbd;
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
  background: red;
  border: 1px solid red;
  border-radius: 50px;
  color: #fff;
  font-size: 12px;
  min-width: 25px;
  padding: 3px 1px;
  position: absolute;
  right: -15px;
  text-align: center;
  top: -5px;
`;
