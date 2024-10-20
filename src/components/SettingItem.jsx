import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

// Define style constants
const desiredTextStyle = {
  fontSize: 18,
  color: "#000", // Black color
};

const SettingItem = ({ title }) => {
  return (
    <StyledSettingItem>
      <Text style={desiredTextStyle}>{title}:</Text>
    </StyledSettingItem>
  );
};

const StyledSettingItem = styled.View`
  align-self: stretch;
  width: 100%;
  background-color: #fff;
  margin-top: 16px;
  min-height: 100px;
  text-align: center;
  padding: 23px 20px;
  justify-content: center;
  align-items: center;
`;

export default SettingItem;
