import { ReactNode } from "react";

interface ISubCardContainer {
  children: ReactNode;
}

function SubCardContainer({ children }: ISubCardContainer) {
  return (
    <div className="w-full  flex justify-evenly flex-wrap ">{children}</div>
  );
}

export default SubCardContainer;
