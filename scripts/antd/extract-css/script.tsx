import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";
import fs from "fs";
import React from "react";
import getAntDTheme from "../../../app/components/theme-provider/theme/get-antd-theme.js";
import getVariables from "../../../app/components/theme-provider/theme/get-variables.js";
import light from "../../../app/components/theme-provider/theme/variables/light.js";

const outputPath = "../../../public/antd.css";

const css = extractStyle((node) => {
  const variables = getVariables({
    mode: "light",
    variables: light,
  });

  return (
    <React.Fragment>
      <ConfigProvider theme={getAntDTheme("light")}>{node}</ConfigProvider>
      <ConfigProvider theme={getAntDTheme("dark")}>{node}</ConfigProvider>
    </React.Fragment>
  );
});

fs.writeFileSync(outputPath, css);
