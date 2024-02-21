import { Flex, RowProps, Typography } from "antd";
import React from "react";
import ModeToggler from "~/components/theme-provider/mode-toggler";
import getClassNames from "~/theme/get-class-names";
import Container from "./container";

const Header: React.FC<Omit<RowProps, "children">> = (props) => {
  return (
    <Container {...props}>
      <Flex
        justify="space-between"
        align="center"
        className={getClassNames(["q-p-t-2", "q-p-b-2"])}
      >
        <Typography.Text
          className={getClassNames(["q-font-size-lg"])}
          type="secondary"
          strong
        >
          Quotes
        </Typography.Text>
        <ModeToggler />
      </Flex>
    </Container>
  );
};

export default Header;
