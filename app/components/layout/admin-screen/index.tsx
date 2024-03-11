import React from "react";
import Title from "../title";
import Body from "./body";
import Footer from "./footer";
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
      className={`md:bg-neutral-100 md:dark:bg-neutral-900 md:px-4 grid grid-flow-col grid-cols-[repeat(24,1fr)] ${
        className ?? ""
      }`}
      {...props}
    >
      <div className="flex flex-col min-h-screen col-[span_24] md:col-[3_/_span_20] lg:col-[4_/_span_18] xl:col-[5_/_span_16]">
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
