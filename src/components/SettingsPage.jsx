import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import SettingItem from './SettingItem';

const plantPresets = {
  Cactus: { moisture: "Low", temperature: "High", waterLevel: "Low", pH: "Slightly Acidic" },
  Fern: { moisture: "High", temperature: "Normal", waterLevel: "High", pH: "Slightly Acidic" },
  Orchid: { moisture: "Moderate", temperature: "Warm", waterLevel: "Moderate", pH: "Slightly Acidic" },
  "Spider Plant": { moisture: "Moderate", temperature: "Normal", waterLevel: "Moderate", pH: "Neutral" },
  "Aloe Vera": { moisture: "Low", temperature: "High", waterLevel: "Low", pH: "Neutral" },
};

const SettingsPage = () => {
  const [selectedPlant, setSelectedPlant] = useState("Cactus");
  const [settings, setSettings] = useState(plantPresets[selectedPlant]);
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePlantChange = (plant) => {
    setSelectedPlant(plant);
    setSettings(plantPresets[plant]);
    setModalVisible(false);
  };

  return (
    <PageWrapper>
      <Header>Settings Page</Header>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginVertical: 20 }}>
        <PickerButtonText>Selected Plant: {selectedPlant}</PickerButtonText>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <ModalContainer>
          <ModalContent>
            <ScrollView>
              {Object.keys(plantPresets).map((plant) => (
                <TouchableOpacity key={plant} onPress={() => handlePlantChange(plant)}>
                  <PlantOption>{plant}</PlantOption>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>
              <CloseText>Close</CloseText>
            </TouchableOpacity>
          </ModalContent>
        </ModalContainer>
      </Modal>

      <ContentWrapper>
        <SettingItem title="Desired Moisture" value={settings.moisture} />
        <SettingItem title="Desired Temperature" value={settings.temperature} />
        <SettingItem title="Desired Water Level" value={settings.waterLevel} />
        <SettingItem title="Desired pH" value={settings.pH} />
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

const PickerButtonText = styled.Text`
  font-size: 18px;
  color: #007bff;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const PlantOption = styled.Text`
  font-size: 18px;
  padding: 10px 0;
  text-align: center;
  color: #000; 
`;

const CloseText = styled.Text`
  font-size: 16px;
  color: red;
  text-align: center;
`;

const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export default SettingsPage;
