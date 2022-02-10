import { Player } from "@lottiefiles/react-lottie-player";
import { animations } from "../constants";
import { convertToFahrenheit } from "../utils/index";
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
    <div className="shadow-md rounded-3xl flex flex-col w-[100px] items-center  py-5 bg-[#ffff] rounded ">
      {Object.keys(temp).length > 0 ? (
        <>
          <h5 className="text-lg font-normal ">
            {new Date(dt * 1000).toString().split(" ")[0]}
          </h5>
          <div className="w-[60px] mb-3  ">
            <Player
              autoplay
              loop
              src={
                animations.find((e) =>
                  weather[0].id.toString().startsWith(e.id)
                )?.url || {}
              }
              style={{ width: "100%", height: "100%" }}
            >
              {/* <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          /> */}
            </Player>
          </div>
          <div className="flex ">
            <p className="text-md font-medium text-slate-400 mr-3	">
              {unit === "C"
                ? Math.round(min) + "º"
                : Math.round(convertToFahrenheit(min)) + "º"}
            </p>
            <p className="text-md font-medium">
              {unit === "C"
                ? Math.round(min) + "º"
                : Math.round(convertToFahrenheit(max)) + "º"}
            </p>
          </div>
        </>
      ) : (
        <>
          <h5 className="text-lg font-normal ">
            {new Date(dt * 1000).toLocaleTimeString("en-us", {
              hour: "numeric",
              hour12: true,
            })}
          </h5>
          <div className="w-[60px] mb-3  ">
            <Player
              autoplay
              loop
              src={
                animations.find((e) =>
                  weather[0].id.toString().startsWith(e.id)
                )?.url || {}
              }
              style={{ width: "100%", height: "100%" }}
            >
              {/* <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          /> */}
            </Player>
          </div>
          <div className="flex ">
            <p className="text-md font-medium">
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
