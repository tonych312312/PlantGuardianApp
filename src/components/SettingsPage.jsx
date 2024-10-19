import React from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";
import SettingItem from './SettingItem';

const SettingsPage = () => {
  const settingItems = [
    { title: "Desired Moisture" },
    { title: "Desired Temperature" },
    { title: "Desired Water Level" },
    { title: "Desired pH" },
  ];

  return (
    <PageWrapper>
      <Header>Settings Page</Header>
      <ContentWrapper>
        {settingItems.map((item, index) => (
          <SettingItem key={index} title={item.title} />
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  background-color: #aff397;
  text-align: center;
  width: 100%;
  padding: 20px;
`;

const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export default SettingsPage;
