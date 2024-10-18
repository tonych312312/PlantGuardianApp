import React from "react";
import styled from "styled-components/native";
import { Image, Text, TouchableOpacity } from "react-native";

const NavItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemWrapper>
        <Icon source={{ uri: icon }} resizeMode="contain" />
        <Label>{label}</Label>
      </ItemWrapper>
    </TouchableOpacity>
  );
};

const ItemWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin: auto 0;
`;

const Icon = styled(Image).attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 25px;
  height: 25px;
`;

const Label = styled(Text)`
  margin-top: 4px;
`;

export default NavItem;
