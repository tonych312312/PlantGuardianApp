import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Header = () => (
  <HeaderContainer>
    <HeaderText>Plant Guardian App</HeaderText>
  </HeaderContainer>
);

const HeaderContainer = styled.View`
  background-color: #aff397; 
  padding: 20px;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2e7d32;
  text-align: center;
`;

export default Header;
