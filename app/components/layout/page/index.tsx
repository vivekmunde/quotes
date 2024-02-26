import React from "react";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import CPage from "./page";
import Title from "./title";
export type { TBodyProps } from "./body";

class Page extends React.Component<{ children: React.ReactNode }> {
  static Header: typeof Header;
  static Body: typeof Body;
  static Footer: typeof Footer;
  static Title: typeof Title;

  render() {
    return <CPage>{this.props.children}</CPage>;
  }
}

Page.Header = Header;
Page.Body = Body;
Page.Footer = Footer;
Page.Title = Title;

export default Page;
