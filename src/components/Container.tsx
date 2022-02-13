import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}
function Container({ children }: IContainerProps) {
  return (
    <div className="w-full relative items-start flex-wrap max-h-[calc(100vh)] h-full flex ">
      {children}
    </div>
  );
}

export default Container;
