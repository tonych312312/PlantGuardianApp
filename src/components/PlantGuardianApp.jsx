import React from "react";
import styled from "styled-components/native";
import Header from "./Header";
import Welcome from "./Welcome";
import NavigationBar from "./NavigationBar";

function PlantGuardianApp() {
  return (
    <AppContainer>
      <Header />
      <Welcome />
      <NavigationBar />
    </AppContainer>
  );
}

const AppContainer = styled.View`
  background-color: #fff;
  flex: 1;
  max-width: 360px;
  flex-direction: column;
  justify-content: flex-start;
`;

export default PlantGuardianApp;

