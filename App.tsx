import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlantGuardianApp from './src/components/PlantGuardianApp';
import SensorPage from './src/components/SensorPage';
import CameraPage from './src/components/CameraPage';
import WateringPage from './src/components/WateringPage';
import SettingsPage from './src/components/SettingsPage';
import NavigationBar from './src/components/NavigationBar';
import styled from 'styled-components/native';

const Stack = createStackNavigator();

// Define plant presets globally to match what’s in `SettingsPage`
const plantPresets = {
  Cactus: { moistureRange: [450, Infinity] },
  Fern: { moistureRange: [0, 380] },
  Orchid: { moistureRange: [0, 380] },
  "Spider Plant": { moistureRange: [380, 450] },
  "Aloe Vera": { moistureRange: [450, Infinity] },
};

const App = () => {
  const [selectedPlant, setSelectedPlant] = useState("Cactus"); // Track selected plant
  const desiredMoistureRange = plantPresets[selectedPlant].moistureRange;

  // Function to handle plant change from SettingsPage
  const handlePlantChange = (newPlant) => {
    setSelectedPlant(newPlant);
  };

  // Function to check moisture level and display a notification
  const checkMoistureStatus = async () => {
    try {
      const response = await fetch("http://107.200.171.115:5000/api/data");
      const latestData = await response.json();
      const moistureValue = parseInt(latestData.moistureSens, 10);

      if (moistureValue < desiredMoistureRange[0]) {
        Alert.alert("Notification", "Your plant has more than enough water.");
      } else if (moistureValue > desiredMoistureRange[1]) {
        Alert.alert("Notification", "Your plant should be watered.");
      } else {
        Alert.alert("Notification", "Your plant is doing well and has enough water.");
      }
    } catch (error) {
      console.error("Error fetching data for moisture check:", error);
    }
  };

  // Set up the interval for the moisture check every 3 minutes
  useEffect(() => {
    const intervalId = setInterval(checkMoistureStatus, 2 * 60 * 1000); // 2 minutes

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [desiredMoistureRange]); // Re-run when desiredMoistureRange changes

  return (
    <NavigationContainer>
      <AppContainer>
        <ContentContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={PlantGuardianApp} />
            <Stack.Screen name="Sensors" component={SensorPage} />
            <Stack.Screen name="Camera" component={CameraPage} />
            <Stack.Screen name="Water">
              {() => <WateringPage selectedPlant={selectedPlant} />}
            </Stack.Screen>
            <Stack.Screen name="Settings">
              {() => <SettingsPage selectedPlant={selectedPlant} onPlantChange={handlePlantChange} />}
            </Stack.Screen>
          </Stack.Navigator>
        </ContentContainer>
        <NavigationBar />
      </AppContainer>
    </NavigationContainer>
  );
};

const AppContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const ContentContainer = styled.View`
  flex: 1;
`;

export default App;
