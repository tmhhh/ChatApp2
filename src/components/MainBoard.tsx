import { ReactNode } from "react";

interface IMainBoard {
  children: ReactNode;
}
function MainBoard({ children }: IMainBoard) {
  return <div className="ml-10 flex flex-1 flex-wrap ">{children}</div>;
}

export default MainBoard;
