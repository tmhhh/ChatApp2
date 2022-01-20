function SubCard() {
  return (
    <div className="flex flex-col w-24 h-32 items-center ">
      <h5 className="text-lg font-normal">Tue</h5>
      <div className="w-16 h-16 mb-3">
        <img
          className="w-full h-full"
          src="https://image.flaticon.com/icons/png/512/979/979585.png"
          alt=""
        />
      </div>
      <div className="flex">
        <p className="text-lg font-medium text-slate-400	">75*</p>
        <p className="text-lg font-medium">95*</p>
      </div>
    </div>
  );
}

export default SubCard;
