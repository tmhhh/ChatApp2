import { ReactNode } from "react";

interface IMainBoard {
  children: ReactNode;
}
function MainBoard({ children }: IMainBoard) {
  return (
    <div className="px-10 items-center h-full flex flex-1 flex-wrap gap-[10px] bg-[#f6f6f8] ">
      {children}
    </div>
  );
}

export default MainBoard;
