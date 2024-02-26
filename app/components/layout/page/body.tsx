import React from "react";

export type TBodyProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Body: React.FC<TBodyProps> = ({ children, className, ...props }) => {
  return (
    <div className={`py-2 flex-1 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default Body;
