import React from "react";

const Container: React.FC<
  { children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, ...props }) => {
  return (
    <div
      className={`grid sm:grid-cols-[1fr_22fr_1fr] md:grid-cols-[2fr_20fr_2fr] lg:grid-cols-[4fr_16fr_4fr] xl:grid-cols-[5fr_14fr_5fr] ${
        className ?? ""
      }`}
      {...props}
    >
      <div />
      <div>{children}</div>
      <div />
    </div>
  );
};

export default Container;
