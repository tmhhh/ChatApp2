import { animations, WEATHER_IMG_URL } from "../constants";
import { convertToTime } from "../utils";

import { Player } from "@lottiefiles/react-lottie-player";

interface IProps {
  temp: number;
  weather: {
    id: number;
    icon: String;
    main: String;
    description: String;
  }[];
}
function MainCard({ temp, weather }: IProps) {
  return weather.length > 0 ? (
    <div className="w-1/4 h-full flex flex-col bg-[#ffff] rounded-2xl  p-7">
      <div className=" flex items-center justify-between w-full ">
        <h3 className="text-2xl font-normal	bg-[#ffff]	">District 7</h3>
        <button
          data-tooltips="Your location"
          className="after:content-['Location'] after:transition-all after:ease-in-out after:duration-500 after:text-[#ffff] after:p-2 text-md after:font-bold  after:bg-[#111] after:rounded-xl after:absolute after:top-[90%] hover:after:top-[100%]  after:left-0 relative rounded-2xl bg-[#f6f6f8] p-2 hover:after:opacity-100 hover:after:visible after:opacity-0 after:invisible hover:bg-[#e9e9e9]"
        >
          <i className="bx bx-current-location text-2xl"></i>{" "}
        </button>
      </div>
      <div className="  w-full  text-center">
        {/* <img
          className="w-48 h-48 inline-block object-cover"
          src="https://image.flaticon.com/icons/png/512/979/979585.png"
          alt=""
        /> */}
        <Player
          autoplay
          loop
          src={
            animations.find((e) => weather[0].id.toString().startsWith(e.id))
              ?.url || {}
          }
          className="w-48 h-48 inline-block"
        >
          {/* <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          /> */}
        </Player>
      </div>
      <p className="text-6xl font-medium mt-7 text-center">
        {Math.round(temp)}&#8451;
      </p>
      <p className="text-lg font-medium mt-7 text-center">
        {new Date().toString().split(" ")[0] + ", " + convertToTime()}
      </p>
      <div className="flex mt-7 items-center">
        <div className="w-24 h-24">
          <img
            className="w-full h-full"
            src={WEATHER_IMG_URL + weather[0].icon + ".png"}
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-lg font-medium">{weather[0].main}</p>
          <p className="">{weather[0].description}</p>
        </div>
      </div>
      <div className="w-full mt-7 rounded-lg  flex-1 overflow-hidden	">
        <img
          className="w-full h-full object-cover"
          src="https://rapid-weather.vercel.app/image/cloud.jpg"
          alt=""
        />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default MainCard;
