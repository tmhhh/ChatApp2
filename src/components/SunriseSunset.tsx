import { calcTimeDifference, convertToTime } from "../utils";

interface IProps {
  data: {
    sunset: number;
    sunrise: number;
  };
}
function SunriseSunset({ data: { sunset, sunrise } }: IProps) {
  return (
    <div className="rounded-2xl bg-[#ffff] w-[calc(100%/3-10px)] flex flex-col  shadow-md p-5 h-[200px]">
      <h3 className="mb-5 text-lg font-normal">Sunrise and Sunset</h3>
      <div className="flex items-center ">
        <div className="mr-2">
          <img
            src="https://rapid-weather.vercel.app/today/sunrise.png"
            alt=""
          />
        </div>
        <div>
          <p>{convertToTime(sunrise)}</p>
          <p className="text-slate-400 text-sm">
            {calcTimeDifference(sunrise)}
          </p>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="mr-2">
          <img src="https://rapid-weather.vercel.app/today/sunset.png" alt="" />
        </div>
        <div>
          <p className=" ">{convertToTime(sunset)}</p>
          <p className="text-slate-400 text-sm">{calcTimeDifference(sunset)}</p>
        </div>
      </div>
    </div>
  );
}

export default SunriseSunset;
