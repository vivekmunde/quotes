import React from "react";
import LayoutFooter from "../footer";

const Footer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <LayoutFooter
      className={`bg-white dark:bg-black md:rounded-t shadow-md px-4 md:px-5 py-2 ${className}`}
      {...props}
    >
      {children}
    </LayoutFooter>
  );
};

export default Footer;
