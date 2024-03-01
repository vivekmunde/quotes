import React from "react";
import Body from "./body";
import Container from "./container";
import Footer from "./footer";
import Header from "./header";
import Title from "./title";
export type { TBodyProps } from "./body";

class Layout extends React.Component<{ children: React.ReactNode }> {
  static Header: typeof Header;
  static Body: typeof Body;
  static Footer: typeof Footer;
  static Title: typeof Title;

  render() {
    return <Container>{this.props.children}</Container>;
  }
}

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.Title = Title;

export default Layout;
