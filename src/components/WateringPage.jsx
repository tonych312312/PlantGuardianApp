import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import NavigationBar from "./NavigationBar";

const WateringPage = () => {
  return (
    <PageWrapper>
      <Header>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Watering Page</Text>
      </Header>
      <LastWateredSection>
        <Text style={{ fontSize: 18 }}>Last Watered:</Text>
      </LastWateredSection>
      <ManualWateringSection>
        <ManualWateringButton>
          <Text style={{ fontSize: 18 }}>Click to manually water</Text>
        </ManualWateringButton>
      </ManualWateringSection>
      <NavigationBar />
    </PageWrapper>
  );
};

const PageWrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Header = styled.View`
  background-color: #aff397;
  padding: 37px;
  justify-content: center;
  align-items: center;
`;

const LastWateredSection = styled.View`
  background-color: #fff;
  margin-top: 93px;
  padding: 37px;
  justify-content: center;
  align-items: center;
`;

const ManualWateringSection = styled.View`
  margin-top: 93px;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

const ManualWateringButton = styled(TouchableOpacity)`
  border-radius: 8px;
  background-color: #bbefff;
  padding: 37px;
  border: 1px solid #000;
  width: 100%;
  align-items: center;
`;

export default WateringPage;
