import React from "react";
import Page from "~/components/layout/page";
import Menu from "./menu";

const Header: React.FC = () => {
  return (
    <Page.Header>
      <Menu />
    </Page.Header>
  );
};

export default Header;
