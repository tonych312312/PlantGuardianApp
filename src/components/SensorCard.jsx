import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const SensorCard = ({ title, value, status }) => {
  return (
    <CardWrapper>
      <SensorText>
        {title}: <BoldText>{status}{value}</BoldText>
      </SensorText>
    </CardWrapper>
  );
};

const CardWrapper = styled.View`
  width: 90%; 
  background-color: #e0f7fa;
  border-radius: 20px;
  padding: 15px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 3;
`;

const SensorText = styled(Text)`
  font-size: 18px;
  color: #000;
`;

const BoldText = styled(Text)`
  font-weight: bold;
`;

export default SensorCard;
