interface IProps {
  setUnit: (newUnit: string) => void;
  unit: string;
}
function Header({ setUnit, unit }: IProps) {
  return (
    <div className="flex flex-1  ">
      <div className="flex justify-between flex-1 ml-5">
        <div className="view__options flex  ">
          <h4 className="text-lg font-bold cursor-pointer	">Today</h4>
          <h4 className="text-lg font-bold ml-5	cursor-pointer">Week</h4>
        </div>
        <div className="temp__types flex mr-10 items-center">
          <h4
            onClick={() => setUnit("C")}
            className={`p-2 rounded-2xl flex items-center justify-center w-[30px] h-[30px]  text-lg font-bold cursor-pointer
             ${
               unit === "C"
                 ? ` bg-[black] text-[white] `
                 : ` bg-[white] text-[black] `
             }`}
          >
            &#8451;
          </h4>
          <h4
            onClick={() => setUnit("F")}
            className={`p-2 rounded-2xl flex items-center justify-center w-[30px] h-[30px]  text-lg font-bold cursor-pointer
            ${
              unit === "F"
                ? ` bg-[black] text-[white] `
                : ` bg-[white] text-[black] `
            }`}
          >
            &#8457;
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
