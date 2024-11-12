import React from "react";
import styled from "styled-components/native";
import NavItem from './NavItem';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const NavigationBar = () => {
  const navigation = useNavigation();
  const navItems = [
    { icon: "leaf", label: "Sensors", route: "Sensors" },
    { icon: "camera", label: "Camera", route: "Camera" },
    { icon: "tint", label: "Water", route: "Water" },
    { icon: "cog", label: "Settings", route: "Settings" },
  ];

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <NavWrapper>
      {navItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} label={item.label} onPress={() => handleNavigation(item.route)} />
      ))}
    </NavWrapper>
  );
};

const NavWrapper = styled.View`
  background-color: #f3f4f6;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  height: 60px;
`;

export default NavigationBar;
