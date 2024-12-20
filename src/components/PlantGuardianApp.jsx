import React from "react";
import styled from "styled-components/native";
import Header from './Header';
import Welcome from './Welcome';

function PlantGuardianApp() {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Welcome />
      </ContentContainer>
    </AppContainer>
  );
}

const AppContainer = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
`;

const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default PlantGuardianApp;
