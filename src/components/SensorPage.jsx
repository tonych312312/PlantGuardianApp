import React from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";
import NavigationBar from "./NavigationBar";
import SensorCard from "./SensorCard";

const SensorPage = () => {
  const sensorData = [
    { title: "Current Moisture", value: "" },
    { title: "Current Temperature", value: "" },
    { title: "Current Water Level", value: "" },
    { title: "Current pH", value: "" },
  ];

  return (
    <PageWrapper>
      <Header>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Sensor Page</Text>
      </Header>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {sensorData.map((sensor, index) => (
          <SensorCard key={index} title={sensor.title} value={sensor.value} />
        ))}
      </ScrollView>
      <NavigationBar />
    </PageWrapper>
  );
};

const PageWrapper = styled.View`
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
  padding: 37px;
  justify-content: center;
  align-items: center;
`;

export default SensorPage;
