import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const SettingItem = ({ title, value }) => {
  return (
    <StyledSettingItem>
      <SettingText>{title}: <SettingValue>{value}</SettingValue></SettingText>
    </StyledSettingItem>
  );
};

const StyledSettingItem = styled.View`
  align-self: center; 
  width: 90%; 
  background-color: #e0f7fa; 
  margin-top: 16px;
  min-height: 60px;
  text-align: center;
  padding: 15px 20px; 
  justify-content: center;
  align-items: center;
  border-radius: 20px; 
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5; 
`;

const SettingText = styled(Text)`
  font-size: 18px;
  color: #000; 
`;

const SettingValue = styled(Text)`
  font-weight: bold;
  color: #000; 
  font-size: 18px;
`;

export default SettingItem;
