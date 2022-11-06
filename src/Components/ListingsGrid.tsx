import type { FC } from "react";

export const ListingsGrid: FC<any> = ({ children }) => {
  return (
    <div className="grid grid-cols-mobile justify-center  gap-14 mx-20 my-10 lg:grid-cols-desktop">
      {children}
    </div>
  );
};
