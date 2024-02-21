import { RowProps } from "antd";
import React from "react";
import Container from "./container";

const Footer: React.FC<RowProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Footer;
