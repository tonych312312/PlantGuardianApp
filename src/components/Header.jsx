import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

function Header() {
  return (
    <HeaderContainer>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Plant Guardian</Text>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  width: 100%;
  background-color: #aff397;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export default Header;
