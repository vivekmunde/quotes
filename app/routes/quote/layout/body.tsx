import { RowProps } from "antd";
import React from "react";
import Container from "./container";

const Body: React.FC<RowProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Body;
