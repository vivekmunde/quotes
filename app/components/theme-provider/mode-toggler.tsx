import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React from "react";
import getClassNames from "../../theme/get-class-names";
import useGetMode from "./use-get-mode";
import useToggleMode from "./use-toggle-mode";

const ModeToggler: React.FC = () => {
  const mode = useGetMode();
  const onToggle = useToggleMode();

  return (
    <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
      <Button
        icon={mode === "dark" ? <SunOutlined /> : <MoonOutlined />}
        onClick={() => {
          onToggle();
        }}
        type="text"
        className={getClassNames(["q-color-secondary"])}
        shape="circle"
      />
    </Tooltip>
  );
};

export default ModeToggler;
