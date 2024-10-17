import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const SensorCard = ({ title, value }) => {
  return (
    <CardWrapper>
      <Text>{title}: {value}</Text>
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

export default SensorCard;
