import React from "react";

const Body: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Body;
