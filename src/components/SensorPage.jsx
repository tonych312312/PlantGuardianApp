import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import SensorCard from './SensorCard';

const SensorPage = () => {
  const [sensorData, setSensorData] = useState({
    moistureSens: "",
    temperatureF: "",
    waterlevelSens: "",
    phsens: "",
  });

  useEffect(() => {
    // Fetch the latest data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("http://107.200.171.115:5000/api/data"); // Replace accordingly..
        const data = await response.json();
        setSensorData({
          moistureSens: data.moistureSens,
          temperatureF: data.temperatureF,
          waterlevelSens: data.waterlevelSens,
          phsens: data.phsens,
        });
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    // Fetch every minute
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Helper functions to determine status
  const determinePHStatus = (phValue) => {
    const ph = parseFloat(phValue);
    if (ph < 5.5) {
      return "Acidic | Below 6 ";
    } else if (ph >= 5.5 && ph <= 6.6) {
      return "Normal | Between 6-8 ";
    } else {
      return "Basic | Above 8 ";
    }
  };

  const determineMoistureStatus = (moistureValue) => {
    const moisture = parseInt(moistureValue, 10);
    if (moisture <= 300) {
      return "Wet | ";
    } else if (moisture > 300 && moisture <= 400) {
      return "Normal | ";
    } else {
      return "Dry | ";
    }
  };

  const determineTemperatureStatus = (tempValue) => {
    const temp = parseFloat(tempValue);
    if (temp <= 72) {
      return "Cold | ";
    } else if (temp > 74 && temp <= 77) {
      return "Normal | ";
    } else {
      return "Warm | ";
    }
  };

  const determineWaterLevelStatus = (waterValue) => {
    const water = parseInt(waterValue, 10);
    if (water <= 572) {
      return "Low | ";
    } else if (water > 572 && water <= 648 ) {
      return "Normal | ";
    } else {
      return "High | ";
    }
  };

  return (
    <PageWrapper>
      <Header>Sensor Page</Header>
      <ContentWrapper>
        <SensorCard 
          title="Current Moisture" 
          value={sensorData.moistureSens} 
          status={determineMoistureStatus(sensorData.moistureSens)} 
        />
        <SensorCard 
          title="Current Temperature" 
          value={sensorData.temperatureF} 
          //status={determineTemperatureStatus(sensorData.temperatureF)} 
        />
        <SensorCard 
          title="Current Water Level" 
          value={sensorData.waterlevelSens} 
          status={determineWaterLevelStatus(sensorData.waterlevelSens)} 
        />
        <SensorCard 
          title="Current pH " 
          // value={sensorData.phsens} 
          status={determinePHStatus(sensorData.phsens)} 
        />
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
  color: #2e7d32; 
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
