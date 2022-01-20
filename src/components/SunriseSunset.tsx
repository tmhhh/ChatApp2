function SunriseSunset() {
  return (
    <div className="w-1/3 flex flex-col mb-5">
      <h3 className="mb-5 text-lg font-normal">Sunrise and Sunset</h3>
      <div className="flex items-center ">
        <div>
          <img
            src="https://rapid-weather.vercel.app/today/sunrise.png"
            alt=""
          />
        </div>
        <div>
          <p>+6:15 AM</p>
          <p className="text-slate-400 text-sm">-10h 37m</p>
        </div>
      </div>
      <div className="flex items-center ">
        <div>
          <img src="https://rapid-weather.vercel.app/today/sunset.png" alt="" />
        </div>
        <div>
          <p className=" ">+6:15 AM</p>
          <p className="text-slate-400 text-sm">-10h 37m</p>
        </div>
      </div>
    </div>
  );
}

export default SunriseSunset;
