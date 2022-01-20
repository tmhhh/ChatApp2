import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}
function Container({ children }: IContainerProps) {
  return (
    <div className="w-full max-h-[calc(100vh-72px)] h-[calc(100vh-72px)] flex mt-5 ">
      {children}
    </div>
  );
}

export default Container;
