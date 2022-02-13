import { ReactNode } from "react";

interface ISubCardContainer {
  children: ReactNode;
}

function SubCardContainer({ children }: ISubCardContainer) {
  return (
    <div className="min-h-[168px] h-[168px] w-full  flex justify-evenly flex-wrap ">
      {children}
    </div>
  );
}

export default SubCardContainer;
