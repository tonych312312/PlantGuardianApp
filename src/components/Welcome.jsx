import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const welcomeTextStyle = {
  fontSize: 20,
  color: "#000", // Black color
};

function Welcome() {
  return (
    <WelcomeContainer>
      <Text style={welcomeTextStyle}>Welcome!</Text>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default Welcome;
