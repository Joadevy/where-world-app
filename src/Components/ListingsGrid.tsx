import type { FC } from "react";

export const ListingsGrid: FC<any> = ({ children }) => {
  return (
    <div className="grid grid-columns-6 gap-2 border-2 border-white p-2">
      {children}
    </div>
  );
};
