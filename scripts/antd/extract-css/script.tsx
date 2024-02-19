import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";
import fs from "fs";
import React from "react";
import {
  getRootStyles,
  getUtilityStyles,
} from "../../../app/components/theme-provider/global-styles/common/index.js";
import getAntDTheme from "../../../app/components/theme-provider/theme/get-antd-theme.js";
import getVariables from "../../../app/components/theme-provider/theme/get-variables.js";
import light from "../../../app/components/theme-provider/theme/variables/light.js";

const variables = getVariables({
  mode: "light",
  variables: light,
});

const rootCss = getRootStyles(variables);
const utilityCss = getUtilityStyles(variables);

const antDCss = extractStyle((node) => {
  return (
    <React.Fragment>
      <ConfigProvider theme={getAntDTheme("light")}>{node}</ConfigProvider>
      <ConfigProvider theme={getAntDTheme("dark")}>{node}</ConfigProvider>
    </React.Fragment>
  );
});

fs.writeFileSync("../../../public/__.1.root.css", rootCss);
fs.writeFileSync("../../../public/__.2.antd.css", antDCss);
fs.writeFileSync("../../../public/__.3.utility.css", utilityCss);
