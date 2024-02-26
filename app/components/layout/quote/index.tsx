import React from "react";
import Page from "../page";
import Body from "./body";
import Loading from "./loading";

class QuotePage extends React.Component<{ children: React.ReactNode }> {
  static Header: typeof Page.Header;
  static Body: typeof Body;
  static Footer: typeof Page.Footer;
  static Title: typeof Page.Title;
  static Loading: typeof Loading;

  render() {
    return <Page>{this.props.children}</Page>;
  }
}

QuotePage.Header = Page.Header;
QuotePage.Body = Body;
QuotePage.Footer = Page.Footer;
QuotePage.Title = Page.Title;
QuotePage.Loading = Loading;

export default QuotePage;
