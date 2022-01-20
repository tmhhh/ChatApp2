function MainCard() {
  return (
    <div className="w-1/4 h-full flex flex-col   p-7">
      <div className="  w-full  text-center">
        <img
          className="w-48 h-48 inline-block object-cover"
          src="https://image.flaticon.com/icons/png/512/979/979585.png"
          alt=""
        />
      </div>
      <p className="text-6xl font-medium mt-7 text-center">88*</p>
      <p className="text-lg font-medium mt-7 text-center">Tue,16:52</p>
      <div className="flex mt-7 items-center">
        <div className="w-24 h-24">
          <img
            className="w-full h-full"
            src="https://rapid-weather.vercel.app/weather/02d.png"
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-lg font-medium">Clouds</p>
          <p className="">few clouds</p>
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
  );
}

export default MainCard;
