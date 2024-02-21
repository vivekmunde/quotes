import { Flex, FlexProps } from "antd";
import React from "react";

const Layout: React.FC<FlexProps> = ({ children, style, ...props }) => {
  return (
    <Flex vertical style={{ height: "100vh", ...style }} {...props}>
      {children}
    </Flex>
  );
};

export default Layout;
