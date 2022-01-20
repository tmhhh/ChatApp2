import React from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import SubCard from "./components/SubCard";
import SubCardContainer from "./components/SubCardContainer";
import SunriseSunset from "./components/SunriseSunset";
import UV from "./components/UV";
import MainBoard from "./components/MainBoard";
import WindStatus from "./components/WindStatus";
import ContextProvider from "./context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Container>
          <MainCard />
          <MainBoard>
            <SubCardContainer>
              <SubCard />
            </SubCardContainer>
            <UV />
            <WindStatus />
            <SunriseSunset />
            <WindStatus />
            <WindStatus />
            <WindStatus />
          </MainBoard>
        </Container>
      </ContextProvider>
    </div>
  );
}

export default App;
