import React, { useContext } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import SubCard from "./components/SubCard";
import SubCardContainer from "./components/SubCardContainer";
import SunriseSunset from "./components/SunriseSunset";
import UV from "./components/UV";
import MainBoard from "./components/MainBoard";
import DetailCard from "./components/DetailCard";
import { Context } from "./context";

function App() {
  const { weatherData, unit, setUnit } = useContext(Context);
  console.log({ unit });
  return (
    <div className="App bg-[#f6f6f8] h-screen ">
      <Container>
        <MainCard {...weatherData.current} />
        <MainBoard>
          <Header unit={unit} setUnit={setUnit} />
          <SubCardContainer>
            {weatherData.daily.length > 0 ? (
              weatherData.daily.map((e: any, index: number) => (
                <SubCard key={index} unit={unit} {...e} />
              ))
            ) : (
              <div>None</div>
            )}
          </SubCardContainer>
          <UV />
          <DetailCard
            detailName={"Wind Status"}
            detailStat={weatherData.current.wind_speed}
            detailUnit={"m/s"}
            detailDescription={
              weatherData.current.wind_deg.toString() + " degrees"
            }
            descriptionIcon={
              "https://rapid-weather.vercel.app/today/direction.png"
            }
          />
          <SunriseSunset
            data={{
              sunset: weatherData.current.sunset,
              sunrise: weatherData.current.sunrise,
            }}
          />
          <DetailCard
            detailName={"Humidity"}
            detailStat={weatherData.current.humidity}
            detailUnit={"%"}
            detailDescription={"Normal"}
            descriptionIcon={
              "https://rapid-weather.vercel.app/today/humidity.png"
            }
          />{" "}
          <DetailCard
            detailName={"Visibility"}
            detailStat={weatherData.current.visibility / 1000}
            detailUnit={"km"}
            detailDescription={"Good for eyes"}
            descriptionIcon={
              "https://rapid-weather.vercel.app/today/visibility.png"
            }
          />{" "}
          <DetailCard
            detailName={"Air Pressure"}
            detailStat={weatherData.current.pressure}
            detailUnit={"hPa"}
            detailDescription={"Normal"}
            descriptionIcon={
              "https://rapid-weather.vercel.app/today/pressure.png"
            }
          />
        </MainBoard>
      </Container>
    </div>
  );
}

export default App;
