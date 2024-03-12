import React, { useContext } from "react";
import LayoutFooter from "../footer";
import Context from "./context";

const Footer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  const { variant } = useContext(Context);

  return (
    <LayoutFooter
      className={[
        variant === "box"
          ? "bg-white dark:bg-black md:rounded-t shadow-md px-4 md:px-5 py-2"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </LayoutFooter>
  );
};

export default Footer;
