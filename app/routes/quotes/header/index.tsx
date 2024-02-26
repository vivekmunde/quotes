import React from "react";
import CHeader from "~/components/layout/header";
import Menu from "./menu";

const Header: React.FC = () => {
  return (
    <CHeader>
      <Menu />
    </CHeader>
  );
};

export default Header;
