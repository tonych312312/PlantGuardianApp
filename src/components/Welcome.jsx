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
  width: 100%;
  background-color: #fff;
  margin-top: 190px;
  min-height: 100px;
  padding: 37px;
  justify-content: center;
  align-items: center;
`;

export default Welcome;
