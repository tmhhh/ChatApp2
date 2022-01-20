import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { API_KEY, API_URL } from "../constants";

const Context = createContext({ weatherData: {} });
interface IContext {
  children: ReactNode;
}
interface IWeatherData {
  name: string;
  lat: number;
  lon: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  hourly: {
    dt: number;
    temp: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  }[];
  daily: {
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    humidity: number;
    wind_speed: number;
    wind_deg: number;
    sunrise: number;
    sunset: number;
    pressure: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    uvi: number;
  }[];
}
function ContextProvider({ children }: IContext) {
  const [weatherData, setWeatherData] = useState<{}>({});

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const res: AxiosResponse<IWeatherData> = await axios.get(API_URL, {
          params: {
            lon: -94.04,
            lat: 33.44,
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
    <Context.Provider value={{ weatherData }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
