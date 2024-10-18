import React from 'react';
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

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer>
        <ContentContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={PlantGuardianApp} />
            <Stack.Screen name="Sensors" component={SensorPage} />
            <Stack.Screen name="Camera" component={CameraPage} />
            <Stack.Screen name="Water" component={WateringPage} />
            <Stack.Screen name="Settings" component={SettingsPage} />
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
