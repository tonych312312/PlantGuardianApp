import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

// Define style constants
const lastWateredTextStyle = {
  fontSize: 18,
  color: "#000", // Black color
};

const WateringPage = () => {
  const [lastWatered, setLastWatered] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle manual watering
  const handleManualWatering = async () => {
    try {
      // Set loading state
      setLoading(true);

      // Set pump_on to 1 (turn on the pump)
      await fetch("http://107.200.171.115:5000/api/control/togglePump", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Set the "Last Watered" state to the current date and time
      const currentDateTime = new Date().toLocaleString();
      setLastWatered(currentDateTime);

      // Automatically revert pump_on to 2 after 5 seconds and hide loading spinner
      setTimeout(async () => {
        await fetch("http://107.200.171.115:5000/api/control/togglePump", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        setLoading(false); // Stop loading after 5 seconds
      }, 5000);
    } catch (error) {
      console.error("Error toggling pump:", error);
      setLoading(false); // Stop loading on error
    }
  };

  return (
    <PageWrapper>
      <Header>Watering Page</Header>
      <ContentWrapper>
        <Section>
          <Text style={lastWateredTextStyle}>Last Watered: {lastWatered || "Not yet"}</Text>
        </Section>
        <ButtonWrapper>
          <ManualWateringButton activeOpacity={0.7} onPress={handleManualWatering} disabled={loading}>
            {loading ? <ActivityIndicator color="#000" /> : <ButtonText>Click to manually water</ButtonText>}
          </ManualWateringButton>
        </ButtonWrapper>
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
