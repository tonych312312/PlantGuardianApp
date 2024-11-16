import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

// Define plant presets, ideally matching what’s set in `SettingsPage` and `app.tsx`
const plantPresets = {
  Cactus: { moistureRange: [450, Infinity], temperature: "High", waterLevel: "Low", pH: "Slightly Acidic" },
  Fern: { moistureRange: [0, 380], temperature: "Normal", waterLevel: "High", pH: "Slightly Acidic" },
  Orchid: { moistureRange: [0, 380], temperature: "Warm", waterLevel: "Moderate", pH: "Slightly Acidic" },
  "Spider Plant": { moistureRange: [380, 450], temperature: "Normal", waterLevel: "Moderate", pH: "Neutral" },
  "Aloe Vera": { moistureRange: [450, Infinity], temperature: "High", waterLevel: "Low", pH: "Neutral" },
};

const WateringPage = ({ selectedPlant = "Cactus" }) => {
  const [lastWatered, setLastWatered] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);

  // Get the desired moisture range for the selected plant
  const desiredMoistureRange = plantPresets[selectedPlant].moistureRange;

  // Function to handle manual watering
  const handleManualWatering = async () => {
    try {
      setLoading(true);

      // Turn on the water pump
      await fetch("http://107.200.171.115:5000/api/control/togglePump", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const currentDateTime = new Date().toLocaleString();
      setLastWatered(currentDateTime);

      setTimeout(async () => {
        await fetch("http://107.200.171.115:5000/api/control/togglePump", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        setLoading(false);
      }, 5000);
    } catch (error) {
      console.error("Error toggling pump:", error);
      setLoading(false);
    }
  };

  // Function to check if moisture is within range and trigger watering if needed
  const handleWateringCheck = async () => {
    setChecking(true);

    try {
      // Fetch the latest sensor data
      const response = await fetch("http://107.200.171.115:5000/api/data");
      const latestData = await response.json();
      const moistureValue = parseInt(latestData.moistureSens, 10);

      // Determine if the plant is overwatered, needs watering, or is within range
      if (moistureValue < desiredMoistureRange[0]) {
        console.log("Your plant has more than enough water.");
        alert("Your plant has more than enough water."); // Display notification
      } else if (moistureValue > desiredMoistureRange[1]) {
        console.log("Your plant should be watered.");
        alert("Your plant should be watered."); // Display notification

        // Trigger watering by toggling the water pump
        await fetch("http://107.200.171.115:5000/api/control/togglePump", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const currentDateTime = new Date().toLocaleString();
        setLastWatered(currentDateTime);

        // Automatically turn off pump after 5 seconds
        setTimeout(async () => {
          await fetch("http://107.200.171.115:5000/api/control/togglePump", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          setChecking(false);
        }, 5000);
      } else {
        console.log("Your plant is doing well and has enough water.");
        alert("Your plant is doing well and has enough water."); // Display notification
      }
    } catch (error) {
      console.error("Error during watering check:", error);
    } finally {
      setChecking(false);
    }
  };

  return (
    <PageWrapper>
      <Header>Watering Page</Header>
      <ContentWrapper>
        <BubbleWrapper>
          <LastWateredText>Last Watered: {lastWatered || "Not yet"}</LastWateredText>
        </BubbleWrapper>

        <ButtonWrapper>
          <ManualWateringButton activeOpacity={0.7} onPress={handleManualWatering} disabled={loading}>
            {loading ? <ActivityIndicator color="#000" /> : <ButtonText>Click to manually water</ButtonText>}
          </ManualWateringButton>
        </ButtonWrapper>

        <ButtonWrapper>
          <WateringCheckButton activeOpacity={0.7} onPress={handleWateringCheck} disabled={checking}>
            {checking ? <ActivityIndicator color="#000" /> : <ButtonText>Watering Check</ButtonText>}
          </WateringCheckButton>
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

// Styles
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
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const BubbleWrapper = styled.View`
  background-color: #e0f7fa;
  padding: 15px 30px;
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
  margin-bottom: 20px;
`;

const LastWateredText = styled(Text)`
  font-size: 18px;
  color: #000;
`;

const ButtonWrapper = styled.View`
  padding: 20px;
`;

const ManualWateringButton = styled(TouchableOpacity)`
  background-color: #bbefff;
  padding: 15px 30px;
  border-radius: 20px;
  width: 100%;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;

const WateringCheckButton = styled(TouchableOpacity)`
  background-color: #bbefff;
  padding: 15px 30px;
  border-radius: 20px;
  width: 100%;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;

const ButtonText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export default WateringPage;
