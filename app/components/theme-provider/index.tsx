import { ConfigProvider, theme } from "antd";
import React from "react";
import GlobalRootStyles from "./global-root-styles";
import { dark, light } from "./themes";

const ThemeProvider: React.FC<{
  children: React.ReactNode;
  mode?: "light" | "dark";
}> = ({ children, mode }) => {
  const themeVariables = mode === "dark" ? dark : light;

  return (
    <ConfigProvider
      theme={{
        algorithm:
          mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorBgBase: themeVariables["color.background.body"],
          colorBgLayout: themeVariables["color.background.body"],
          colorBgContainer: themeVariables["color.background.component"],
          colorPrimary: themeVariables["color.primary"],
          colorLink: themeVariables["color.link"],
        },
      }}
    >
      <GlobalRootStyles variables={themeVariables} />
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
