import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

// Define style constants
const lastWateredTextStyle = {
  fontSize: 18,
  color: "#000", // Black color
};

const WateringPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  let toggleTimeout; // Store the timeout to manage cancelation if needed

  // Function to toggle pump on and then off after 5 seconds
  const handleManualWatering = async () => {
    if (isProcessing) return; // Prevent multiple rapid clicks
    setIsProcessing(true); // Disable the button

    try {
      // Clear any existing timeout to avoid double toggling
      clearTimeout(toggleTimeout);

      // Set pump_on to 1 (turn on the pump)
      await fetch("http://192.168.56.1:5000/api/control/togglePump", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Pump toggled ON");

      // Automatically revert pump_on to 0 after 5 seconds
      toggleTimeout = setTimeout(async () => {
        await fetch("http://192.168.56.1:5000/api/control/togglePump", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Pump automatically turned OFF");
        setIsProcessing(false); // Re-enable the button
      }, 5000);
    } catch (error) {
      console.error("Error toggling pump:", error);
      setIsProcessing(false); // Re-enable the button in case of error
    }
  };

  return (
    <PageWrapper>
      <Header>Watering Page</Header>
      <ContentWrapper>
        <Section>
          <Text style={lastWateredTextStyle}>Last Watered: </Text>
        </Section>
        <ButtonWrapper>
          <ManualWateringButton
            activeOpacity={0.7}
            onPress={handleManualWatering}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <ActivityIndicator color="#000" />
            ) : (
              <ButtonText>Click to manually water</ButtonText>
            )}
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
