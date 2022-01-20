function WindStatus() {
  return (
    <div className="w-1/3 flex flex-col mb-5">
      <h3 className="mb-5 text-lg font-normal">Wind Status</h3>
      <p className="flex items-center mb-5">
        <span className="text-5xl	font-bold mr-3">4.8</span>
        <span>m/s</span>
      </p>
      <div className="flex items-center ">
        <i className="fas fa-location-arrow"></i>
        <span className="ml-4 font-normal">165 degrees</span>
      </div>
    </div>
  );
}

export default WindStatus;
