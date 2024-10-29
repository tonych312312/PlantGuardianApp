import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native";

const CameraPage = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

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
        console.log(`Lighting toggled to ${data.light_on === "3" ? "ON" : "OFF"}`);
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

  // Function to fetch the latest image from the backend
  const fetchLatestImage = async () => {
    setImageLoading(true);
    try {
      const response = await fetch("http://107.200.171.115:5000/api/images/latestImage");
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUri(url);
      } else {
        console.error("Failed to fetch image:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
    setImageLoading(false);
  };

  // Fetch the latest image on component mount
  useEffect(() => {
    fetchLatestImage();
  }, []);

  return (
    <PageWrapper>
      <Header>Camera Page</Header>
      <ContentWrapper>
        {imageLoading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          imageUri && <StyledImage source={{ uri: imageUri }} />
        )}
        <BubbleWrapper>
          <LightingButton activeOpacity={0.7} onPress={handleLightingToggle} disabled={isWaiting}>
            {loading ? <ActivityIndicator color="#000" /> : <ButtonText>Turn on lighting</ButtonText>}
          </LightingButton>
        </BubbleWrapper>
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

const BubbleWrapper = styled.View`
  background-color: #fff89e;
  padding: 15px 30px;
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
  width: 60%;
  align-items: center;
`;

const LightingButton = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const StyledImage = styled.Image`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ccc; /* Placeholder color while image is loading */
`;

export default CameraPage;
