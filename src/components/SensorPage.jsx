import React from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";
import SensorCard from './src/components/SensorCard';
import NavigationBar from './src/components/NavigationBar';

const SensorPage = () => {
  const sensorData = [
    { title: "Current Moisture", value: "" },
    { title: "Current Temperature", value: "" },
    { title: "Current Water Level", value: "" },
    { title: "Current pH", value: "" },
  ];

  return (
    <PageWrapper>
      <Header>Sensor Page</Header>
      <ContentWrapper>
        {sensorData.map((sensor, index) => (
          <SensorCard key={index} title={sensor.title} value={sensor.value} />
        ))}
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
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export default SensorPage;