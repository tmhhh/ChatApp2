import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import {
  API_KEY,
  API_URL,
  defaultLocation,
  LOCATION_NAME_API_URL,
} from "../constants";
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
  location: "",
  setUnit: () => {},
  getWeatherData: () => {},
  getLocationName: () => {},
  todayOrWeek: "today",
  setTodayOrWeek: () => {},
});
interface IContext {
  children: ReactNode;
}
function ContextProvider({ children }: IContext) {
  const [weatherData, setWeatherData] =
    useState<IWeatherData>(WeatherDefaultData);
  const [location, setLocation] = useState<string>("Ha Noi");
  const [unit, setUnit] = useState("C");
  const [todayOrWeek, setTodayOrWeek] = useState<string>("today");
  const getWeatherData = async (
    lon: number = defaultLocation.lon,
    lat: number = defaultLocation.lat
  ) => {
    try {
      const res: AxiosResponse<IWeatherData> = await axios.get(API_URL, {
        params: {
          lon,
          lat,
          appid: API_KEY,
          units: "metric",
        },
      });

      console.log(res.data);
      if (res.data) setWeatherData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getLocationName = async (
    lon: number = defaultLocation.lon,
    lat: number = defaultLocation.lat
  ) => {
    try {
      const res = await axios.get(LOCATION_NAME_API_URL, {
        params: {
          lon,
          lat,
          limit: 1,
          appid: API_KEY,
        },
      });
      if (res.data) setLocation(res.data[0].name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherData();
    getLocationName();
  }, []);
  return (
    <Context.Provider
      value={{
        weatherData,
        unit,
        setUnit,
        getWeatherData,
        getLocationName,
        location,
        todayOrWeek,
        setTodayOrWeek,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
