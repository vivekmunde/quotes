import { ConfigProvider } from "antd";
import React from "react";
import getAntDTheme from "./get-antd-theme";
import GlobalRootStyles from "./global-root-styles";
import { dark, light } from "./themes";

const ThemeProvider: React.FC<{
  children: React.ReactNode;
  mode?: "light" | "dark";
}> = ({ children, mode }) => {
  const themeVariables = mode === "dark" ? dark : light;

  return (
    <ConfigProvider theme={getAntDTheme(mode ?? "light")}>
      <GlobalRootStyles variables={themeVariables} />
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
