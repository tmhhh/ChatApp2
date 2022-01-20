import { ReactNode } from "react";
interface ISubCardContainer {
  children: ReactNode;
}
function SubCardContainer({ children }: ISubCardContainer) {
  return <div className="w-full ml-10 flex justify-evenly ">{children}</div>;
}

export default SubCardContainer;
