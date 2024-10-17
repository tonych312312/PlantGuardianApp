import React from "react";
import styled from "styled-components/native";
import NavItem from './NavItem';



const NavigationBar = () => {
  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/017f24b065d0ddbed4b347a5257675d037439b93dee3b11bb04a9df5e5aba982?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Sensors" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17ea06e10b5d0784ee004aaef371738b22004e69d999cdd7c119ada938d65cd4?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Camera" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/69b3ce242b7bc6a895e1bd5deb28e1f209e40139dcb3e29ea09926dba20f3708?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Water" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43487436a32433a821fe0b2842af3825c1291b45c0571b839c45a86f3df770f3?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Settings" },
  ];

  return (
    <NavWrapper>
      {navItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} label={item.label} />
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
