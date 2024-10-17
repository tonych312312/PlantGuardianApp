import React from "react";
import styled from "styled-components/native";
import { Image, Text } from "react-native";

const NavItem = ({ icon, label }) => {
  return (
    <ItemWrapper>
      <Icon source={{ uri: icon }} resizeMode="contain" />
      <Label>{label}</Label>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin: auto 0;
`;

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const Label = styled(Text)`
  margin-top: 4px;
`;

export default NavItem;
