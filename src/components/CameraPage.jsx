import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

const navigationItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d16231fd234168a8ca0fc769cd7aa34015cfb7b0558ba85aff47715879ba53f?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Sensors" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fb269703f6222952140a7270f8552162c4128f8809b471c1ef50a664fefdbb3?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Camera" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f2e0b2d794cbf067546d6660055cb6424bb466a9545fda1b145f9a640607948?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Water" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4829a149d472fb792d4c163cbeeb33a2eb50a15708d034ab00316cfc2b0c7d8?placeholderIfAbsent=true&apiKey=060d0e4eab7343618add43cffc270ace", label: "Settings" }
];

const CameraPage = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <PageWrapper>
      <Header>Camera Page</Header>
      <MainContent>
        <LightingToggle onPress={toggleLight} activeOpacity={0.7}>
          <ToggleText>{isLightOn ? "Turn off lighting" : "Turn on lighting"}</ToggleText>
        </LightingToggle>
      </MainContent>
    </PageWrapper>
  );
};

const PageWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  background-color: #aff397;
  text-align: center;
  width: 100%;
  padding: 20px;
`;

const MainContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const LightingToggle = styled(TouchableOpacity)`
  padding: 15px 30px;
  background-color: #f4f2a2;
  border-radius: 8px;
  margin-top: 20px;
`;

const ToggleText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export default CameraPage;