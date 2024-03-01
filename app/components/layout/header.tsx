import React from "react";
import Title from "./title";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> & { Title: typeof Title } = ({ children, className, ...props }) => {
  return (
    <div
      className={`py-2 flex flex-row justify-between items-center ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

Header.Title = Title;

export default Header;
