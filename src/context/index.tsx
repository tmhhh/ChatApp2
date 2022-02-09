import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { API_KEY, API_URL } from "../constants";
import { IWeatherContext, IWeatherData } from "../types";

const WeatherDefaultData = {
  name: "",
  lat: 0,
  lon: 0,
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [],
  },
  daily: [],
  hourly: [],
};
export const Context = createContext<IWeatherContext>({
  weatherData: WeatherDefaultData,
  unit: "C",
  setUnit: () => {},
});
interface IContext {
  children: ReactNode;
}
function ContextProvider({ children }: IContext) {
  const [weatherData, setWeatherData] =
    useState<IWeatherData>(WeatherDefaultData);
  const [unit, setUnit] = useState("C");
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const res: AxiosResponse<IWeatherData> = await axios.get(API_URL, {
          params: {
            lon: 106.660172,
            lat: 10.762622,
            appid: API_KEY,
            units: "metric",
          },
        });
        console.log({ res });
        if (res.data) setWeatherData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
  }, []);
  return (
    <Context.Provider value={{ weatherData, unit, setUnit }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
