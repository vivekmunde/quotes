import React from "react";
import LayoutBody from "../body";

const Body: React.FC<
  {
    children: React.ReactNode;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, ...props }) => {
  return (
    <LayoutBody className={`py-2 flex-1 ${className ?? ""}`} {...props}>
      {children}
    </LayoutBody>
  );
};

export default Body;
