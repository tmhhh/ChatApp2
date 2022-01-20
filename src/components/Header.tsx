function Header() {
  return (
    <div className="flex w-full mt-5 ">
      <div className="ml- 10 current__location flex justify-between w-1/4 ml-5">
        <h3 className="text-2xl font-normal		">District 7</h3>
        <button className="current__location__icon">
          <i className="fas fa-location-arrow"></i>
        </button>
      </div>
      <div className="flex justify-between flex-1 ml-10">
        <div className="view__options flex  ">
          <h4 className="text-lg font-bold	">Today</h4>
          <h4 className="text-lg font-bold ml-5	">Week</h4>
        </div>
        <div className="temp__types flex mr-10">
          <h4 className="text-lg font-bold">F</h4>
          <h4 className="ml-5 text-lg font-bold">C</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
