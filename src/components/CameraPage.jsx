import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import NavItem from "./NavItem";

const navigationItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d16231fd234168a8ca0fc769cd7aa34015cfb7b0558ba85aff47715879ba53f?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Sensors" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fb269703f6222952140a7270f8552162c4128f8809b471c1ef50a664fefdbb3?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Camera" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f2e0b2d794cbf067546d6660055cb6424bb466a9545fda1b145f9a640607948?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Water" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4829a149d472fb792d4c163cbeeb33a2eb50a15708d034ab00316cfc2b0c7d8?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Settings" }
];

function CameraPage() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <PageWrapper>
      <HeaderText>Camera Page</HeaderText>
      <MainContent>
        <LightingToggle onPress={toggleLight}>
          <Text>{isLightOn ? "Turn off lighting" : "Turn on lighting"}</Text>
        </LightingToggle>
      </MainContent>
      <NavigationBar>
        {navigationItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} label={item.label} />
        ))}
      </NavigationBar>
    </PageWrapper>
  );
}

const PageWrapper = styled.View`
  background-color: #fff;
  flex: 1;
  max-width: 360px;
  flex-direction: column;
  overflow: hidden;
  color: #000;
  justify-content: flex-start;
`;

const HeaderText = styled.Text`
  align-self: stretch;
  width: 100%;
  background-color: #aff397;
  min-height: 100px;
  text-align: center;
  padding: 37px;
  font-size: 24px;
  font-weight: bold;
`;

const MainContent = styled.View`
  flex-direction: column;
  margin-top: 20px;
  padding: 0 30px;
  align-items: center;
`;

const LightingToggle = styled(TouchableOpacity)`
  border-radius: 8px;
  background-color: #f4f2a2;
  padding: 15px 30px;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const NavigationBar = styled.View`
  background-color: #f3f4f6;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-top: 20px;
`;

export default CameraPage;
