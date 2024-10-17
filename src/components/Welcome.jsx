import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

function Welcome() {
  return (
    <WelcomeContainer>
      <Text style={{ fontSize: 20 }}>Welcome!</Text>
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
