import React from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";
import NavigationBar from "./NavigationBar";
import SettingItem from "./SettingItem";

const SettingsPage = () => {
  const settingItems = [
    { title: "Desired Moisture" },
    { title: "Desired Temperature" },
    { title: "Desired Water Level" },
    { title: "Desired pH" },
  ];

  return (
    <StyledSettingsPage>
      <Header>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Settings Page</Text>
      </Header>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {settingItems.map((item, index) => (
          <SettingItem key={index} title={item.title} />
        ))}
      </ScrollView>
      <NavigationBar />
    </StyledSettingsPage>
  );
};

const StyledSettingsPage = styled.View`
  background-color: #fff;
  flex: 1;
  max-width: 360px;
  flex-direction: column;
  overflow: hidden;
  color: #000;
  justify-content: flex-start;
`;

const Header = styled.View`
  align-self: stretch;
  width: 100%;
  background-color: #aff397;
  min-height: 100px;
  padding: 37px 20px;
  justify-content: center;
  align-items: center;
`;

export default SettingsPage;
