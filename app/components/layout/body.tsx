import React from "react";

const Body: React.FC<
  { children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, ...props }) => {
  return (
    <div className={`py-2 flex-1 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default Body;
