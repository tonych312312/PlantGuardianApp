import React from "react";
import styled from "styled-components/native";
import { Image, Text } from "react-native";

const NavItem = ({ icon, label }) => {
  return (
    <ItemWrapper>
      <Icon source={{ uri: icon }} />
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
  aspect-ratio: 1;
  width: 25px;
  resize-mode: contain;
`;

const Label = styled(Text)`
  margin-top: 4px;
`;

export default NavItem;
