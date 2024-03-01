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
      className={`px-4 grid grid-flow-col grid-cols-[repeat(24,1fr)] ${
        className ?? ""
      }`}
      {...props}
    >
      <div className="flex flex-col h-screen col-[span_24] md:col-[3_/_span_20] lg:col-[5_/_span_16] xl:col-[6_/_span_14]">
        {children}
      </div>
    </div>
  );
};

Screen.Header = Header;
Screen.Body = Body;
Screen.Footer = Footer;
Screen.Title = Title;

export default Screen;
