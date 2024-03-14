import React, { useContext } from "react";
import LayoutBody from "../body";
import Context from "./context";

const Body: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  const { variant } = useContext(Context);

  return (
    <LayoutBody
      className={[
        variant === "box"
          ? "bg-white dark:bg-black md:rounded md:shadow-md px-4 md:px-5 pt-2 pb-4 md:mb-1"
          : "flex-1 py-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </LayoutBody>
  );
};

export default Body;
