import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

const CameraPage = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle lighting toggle
  const handleLightingToggle = async () => {
    if (isWaiting) {
      console.log("Please wait before toggling again.");
      return; // Prevent multiple rapid clicks
    }

    try {
      setIsWaiting(true); // Set waiting state
      setLoading(true); // Show loading indicator

      // Toggle lighting by calling backend endpoint
      const response = await fetch("http://107.200.171.115:5000/api/control/toggleLight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`Lighting toggled to ${data.light_on === "1" ? "ON" : "OFF"}`);
      } else {
        console.error("Failed to toggle lighting:", await response.json());
      }

      // Keep loading spinner visible for an additional 2 seconds
      setTimeout(() => {
        setLoading(false); // Hide loading indicator
        setIsWaiting(false); // Allow the button to be pressed again
      }, 2000);
    } catch (error) {
      console.error("Error toggling lighting:", error);
      setLoading(false); // Ensure loading is hidden even on error
      setIsWaiting(false);
    }
  };

  return (
    <PageWrapper>
      <Header>Camera Page</Header>
      <CameraWrapper>
        <WebView
          source={{ uri: "https://websocket.stevekeller.dev/" }}
          style={{ width: 320, height: 240 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mixedContentMode="always" // Allows mixed content (both HTTP and HTTPS)
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </CameraWrapper>
      <ContentWrapper>
        <LightingButton activeOpacity={0.7} onPress={handleLightingToggle} disabled={isWaiting}>
          {loading ? <ActivityIndicator color="#000" /> : <ButtonText>Turn on lighting</ButtonText>}
        </LightingButton>
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

const CameraWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const LightingButton = styled(TouchableOpacity)`
  background-color: #fff89e;
  padding: 15px 30px;
  border-radius: 8px;
  width: 60%;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export default CameraPage;
