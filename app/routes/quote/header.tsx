import { Flex, Typography } from "antd";
import React from "react";
import ModeToggler from "~/components/theme-provider/mode-toggler";
import getClassNames from "~/components/theme-provider/theme/get-class-names";

const Header: React.FC = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      className={getClassNames(["n-p-t-2", "n-p-b-2"])}
    >
      <Typography.Title
        level={3}
        type="secondary"
        className={getClassNames(["n-m-b-0"])}
      >
        <span className={getClassNames(["n-primary"])}>Quotes</span>
      </Typography.Title>
      <ModeToggler />
    </Flex>
  );
};

export default Header;
