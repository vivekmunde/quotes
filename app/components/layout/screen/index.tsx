import React from "react";
import Footer from "../footer";
import Title from "../title";
import Body from "./body";
import Header from "./header";

const Screen: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
  Title: typeof Title;
} = ({ children, className, ...props }) => {
  return (
    <div
      className={`px-4 grid sm:grid-cols-[1fr_22fr_1fr] md:grid-cols-[2fr_20fr_2fr] lg:grid-cols-[4fr_16fr_4fr] xl:grid-cols-[5fr_14fr_5fr] ${
        className ?? ""
      }`}
      {...props}
    >
      <div />
      <div className="flex flex-col h-screen">{children}</div>
      <div />
    </div>
  );
};

Screen.Header = Header;
Screen.Body = Body;
Screen.Footer = Footer;
Screen.Title = Title;

export default Screen;
