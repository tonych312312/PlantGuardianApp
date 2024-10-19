import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const SensorCard = ({ title, value, status }) => {
  return (
    <CardWrapper>
      <SensorText>{title}: {status}{value}</SensorText>
    </CardWrapper>
  );
};

const CardWrapper = styled.View`
  align-self: stretch;
  width: 100%;
  background-color: #fff;
  margin-top: 16px;
  min-height: 100px;
  text-align: center;
  padding: 23px;
  justify-content: center;
  align-items: center;
`;

const SensorText = styled.Text`
  font-size: 18px; /* Adjust the size as needed */
  color: #000; /* Set to black */
`;

export default SensorCard;
