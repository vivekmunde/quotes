import React from "react";
import LayoutBody from "../body";

const Body: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <LayoutBody
      className={`flex-1 bg-white dark:bg-black md:rounded md:shadow-md px-4 md:px-5 pt-2 pb-4 md:mb-1 ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </LayoutBody>
  );
};

export default Body;
