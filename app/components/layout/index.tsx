import React from "react";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import Screen from "./screen";

const Layout: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
  Screen: typeof Screen;
} = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.Screen = Screen;

export default Layout;
