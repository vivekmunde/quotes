import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import getClassNames from "./theme/get-class-names";
import useGetMode from "./use-get-mode";
import useToggleMode from "./use-toggle-mode";

const ModeToggler: React.FC = () => {
  const mode = useGetMode();
  const onToggle = useToggleMode();

  return (
    <Button
      icon={mode === "dark" ? <SunOutlined /> : <MoonOutlined />}
      onClick={() => {
        onToggle();
      }}
      type="text"
      className={getClassNames(["n-color-secondary"])}
    />
  );
};

export default ModeToggler;
