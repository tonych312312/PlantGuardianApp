import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import NavigationBar from './src/components/NavigationBar';

const WateringPage = () => {
  return (
    <PageWrapper>
      <Header>Watering Page</Header>
      <ContentWrapper>
        <Section>
          <Text style={{ fontSize: 18 }}>Last Watered: </Text>
        </Section>
        <ButtonWrapper>
          <ManualWateringButton activeOpacity={0.7}>
            <ButtonText>Click to manually water</ButtonText>
          </ManualWateringButton>
        </ButtonWrapper>
      </ContentWrapper>
      <NavigationBar />
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
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Section = styled.View`
  padding: 20px;
`;

const ButtonWrapper = styled.View`
  padding: 20px;
`;

const ManualWateringButton = styled(TouchableOpacity)`
  background-color: #bbefff;
  padding: 15px 30px;
  border-radius: 8px;
  width: 100%;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export default WateringPage;