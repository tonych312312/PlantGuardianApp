import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

const CameraPage = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  // Toggle camera_on to 1 when page is focused and 0 when unfocused
  useFocusEffect(
    React.useCallback(() => {
      const enableCamera = async () => {
        try {
          await fetch("http://107.200.171.115:5000/api/control/enterCamera", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          console.error("Error enabling camera:", error);
        }
      };

      const disableCamera = async () => {
        try {
          await fetch("http://107.200.171.115:5000/api/control/exitCamera", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          console.error("Error disabling camera:", error);
        }
      };

      // Enable camera when entering
      enableCamera();

      // Disable camera when leaving
      return () => disableCamera();
    }, [])
  );

  // Function to handle lighting toggle
  const handleLightingToggle = async () => {
    if (isWaiting) {
      console.log("Please wait before toggling again.");
      return;
    }

    try {
      setIsWaiting(true);
      setLoading(true);

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

      setTimeout(() => {
        setLoading(false);
        setIsWaiting(false);
      }, 2000);
    } catch (error) {
      console.error("Error toggling lighting:", error);
      setLoading(false);
      setIsWaiting(false);
    }
  };

  // Fetch the latest image every 10 seconds
  useEffect(() => {
    const fetchLatestImage = async () => {
      try {
        const response = await fetch("http://107.200.171.115:5000/api/images/latestImage");
        const data = await response.json();

        if (data.image) {
          setImageUri(data.image);
        } else {
          console.error("No image data received");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchLatestImage(); // Initial fetch on mount

    // Set an interval to fetch the latest image every 10 seconds
    const intervalId = setInterval(fetchLatestImage, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <PageWrapper>
      <Header>Camera Page</Header>
      <ContentWrapper>
        {imageUri ? (
          <StyledImage source={{ uri: imageUri }} />
        ) : (
          <Text>No image available</Text>
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
  background-color: #ccc;
`;

export default CameraPage;
