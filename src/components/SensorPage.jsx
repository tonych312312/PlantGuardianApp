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
        const response = await fetch("http://192.168.56.1:5000/api/data"); // Replace accordingly..
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
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Helper function to determine pH status
  const determinePHStatus = (phValue) => {
    const ph = parseFloat(phValue);
    if (ph < 6.5) {
      return "Acidic, ";
    } else if (ph >= 6.5 && ph <= 7.5) {
      return "Normal, ";
    } else {
      return "Basic, ";
    }
  };

  // Helper function to determine moisture status
  const determineMoistureStatus = (moistureValue) => {
    const moisture = parseInt(moistureValue, 10);
    if (moisture <= 300) {
      return "Dry, ";
    } else if (moisture > 340 && moisture <= 360) {
      return "Normal, ";
    } else if (moisture >= 400) {
      return "Wet, ";
    } else {
      return "";
    }
  };

  // Helper function to determine temperature status
  const determineTemperatureStatus = (tempValue) => {
    const temp = parseFloat(tempValue);
    if (temp <= 72) {
      return "Cold, ";
    } else if (temp > 74 && temp <= 77) {
      return "Normal, ";
    } else if (temp > 77) {
      return "Warm, ";
    } else {
      return "";
    }
  };

  // Helper function to determine water level status (same as moisture)
  const determineWaterLevelStatus = (waterValue) => {
    const water = parseInt(waterValue, 10);
    if (water <= 300) {
      return "Low, ";
    } else if (water > 340 && water <= 360) {
      return "Normal, ";
    } else if (water >= 400) {
      return "High, ";
    } else {
      return "";
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
          status={determineTemperatureStatus(sensorData.temperatureF)} 
        />
        <SensorCard 
          title="Current Water Level" 
          value={sensorData.waterlevelSens} 
          status={determineWaterLevelStatus(sensorData.waterlevelSens)} 
        />
        <SensorCard 
          title="Current pH" 
          value={sensorData.phsens} 
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
