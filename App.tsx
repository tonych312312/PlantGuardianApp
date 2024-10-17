import React from 'react';
import { View, StatusBar } from 'react-native';
import PlantGuardianApp from './src/components/PlantGuardianApp';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <PlantGuardianApp />
    </View>
  );
};

export default App;
