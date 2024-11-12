import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const NavItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemWrapper>
        <Icon name={icon} size={25} color="#000" /> 
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

const Label = styled(Text)`
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export default NavItem;
