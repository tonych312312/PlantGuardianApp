import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <BubbleWrapper>
        <WelcomeText>Welcome to your Plant Guardian!</WelcomeText>
      </BubbleWrapper>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

const BubbleWrapper = styled.View`
  background-color: #e0f7fa; 
  padding: 15px 30px; 
  border-radius: 20px; 
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5; 
`;

const WelcomeText = styled(Text)`
  font-size: 20px; 
  color: #000; 
`;

export default Welcome;
