import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";
import fs from "fs";
import React from "react";
import getAntDTheme from "../../../app/components/theme-provider/get-antd-theme.js";

const outputPath = "../../../public/antd.css";

const css = extractStyle((node) => {
  return (
    <React.Fragment>
      <ConfigProvider theme={getAntDTheme("light")}>{node}</ConfigProvider>
      <ConfigProvider theme={getAntDTheme("dark")}>{node}</ConfigProvider>
    </React.Fragment>
  );
});

fs.writeFileSync(outputPath, css);
