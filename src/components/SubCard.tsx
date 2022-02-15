import { Player } from "@lottiefiles/react-lottie-player";
import { animations } from "../constants";
import { convertToFahrenheit } from "../utils/index";
import "./style.css";
interface IProps {
  unit: string;
  temp: any;
  dt: number;
  weather: {
    id: number;
    icon: string;
    main: string;
    description: string;
  }[];
}
function SubCard({ temp: { min, max }, dt, weather, unit, temp }: IProps) {
  return (
    <div className="h-full shadow-md rounded-3xl flex flex-col w-[100px] items-center  py-5 bg-[#ffff] rounded-2xl ">
      {typeof temp === "object" ? (
        <>
          <h5 key={0} className="slicing-animation text-lg font-normal ">
            {new Date(dt * 1000).toString().split(" ")[0]}
          </h5>
          <div className="w-[60px] mb-4 flex-1 ">
            <Player
              autoplay
              loop
              src={
                animations.find((e) =>
                  weather[0].id.toString().startsWith(e.id)
                )?.url || {}
              }
            ></Player>
            {/* <img
              src="	https://rapid-weather.vercel.app/weather/04n.png"
              className="w-full h-full"
            /> */}
          </div>
          <div className="flex ">
            <p
              key={Math.random()}
              className="slicing-animation text-md font-medium text-slate-400 mr-3	"
            >
              {unit === "C"
                ? Math.round(min) + "º"
                : Math.round(convertToFahrenheit(min)) + "º"}
            </p>
            <p
              key={Math.random()}
              className="slicing-animation text-md font-medium"
            >
              {unit === "C"
                ? Math.round(max) + "º"
                : Math.round(convertToFahrenheit(max)) + "º"}
            </p>
          </div>
        </>
      ) : (
        <>
          <h5 key={1} className="slicing-animation text-lg font-normal ">
            {new Date(dt * 1000).toLocaleTimeString("en-us", {
              hour: "numeric",
              hour12: true,
            })}
          </h5>
          <div className="w-[60px] mb-3 flex-1 ">
            <Player
              autoplay
              loop
              speed={2}
              src={
                animations.find((e) =>
                  weather[0].id.toString().startsWith(e.id)
                )?.url || {}
              }
              style={{ width: "100%", height: "100%" }}
            ></Player>
          </div>
          <div className="flex ">
            <p
              key={Math.random()}
              className="slicing-animation text-md font-medium"
            >
              {unit === "C"
                ? Math.round(temp) + "º"
                : Math.round(convertToFahrenheit(temp)) + "º"}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default SubCard;
