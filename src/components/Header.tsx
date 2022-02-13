import { convertToFahrenheit } from "../utils";

interface IProps {
  setUnit: (newUnit: string) => void;
  setTodayOrWeek: (value: string) => void;
  todayOrWeek: string;
  unit: string;
  temp: number;
  oldTempRef: {
    current: number | null;
  };
}
function Header({
  setUnit,
  unit,
  setTodayOrWeek,
  todayOrWeek,
  oldTempRef,
  temp,
}: IProps) {
  return (
    <div className="flex flex-1  ">
      <div className="flex justify-between flex-1 ml-5">
        <div className="view__options flex  ">
          <h4
            onClick={() => setTodayOrWeek("today")}
            className={`transition-all duration-500 ease-in-out text-lg font-bold cursor-pointer ${
              todayOrWeek === "today"
                ? `border-b-2 border-black	text-[black]`
                : `text-[#999]`
            }`}
          >
            Today
          </h4>
          <h4
            onClick={() => setTodayOrWeek("week")}
            className={`transition-all duration-500 ease-in-out text-lg font-bold cursor-pointer ml-5 ${
              todayOrWeek === "week"
                ? `border-b-2 border-black text-[black]`
                : `text-[#999]`
            }`}
          >
            Week
          </h4>
        </div>
        <div className="temp__types flex mr-10 items-center">
          <h4
            onClick={() => {
              oldTempRef.current = convertToFahrenheit(temp);
              setUnit("C");
            }}
            className={`transition-all duration-500 ease-in-out p-2 rounded-2xl flex items-center justify-center w-[30px] h-[30px]  text-lg font-bold cursor-pointer
             ${
               unit === "C"
                 ? ` bg-[black] text-[white] `
                 : ` bg-[white] text-[black] `
             }`}
          >
            &#8451;
          </h4>
          <h4
            onClick={() => {
              oldTempRef.current = temp;
              setUnit("F");
            }}
            className={`transition-all duration-500 ease-in-out p-2 rounded-2xl flex items-center justify-center w-[30px] h-[30px]  text-lg font-bold cursor-pointer
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
