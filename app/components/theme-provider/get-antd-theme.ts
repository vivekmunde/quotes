import { theme } from "antd";
import { dark, light } from "./themes";

const getAntDTheme = (mode: "light" | "dark") => {
  const themeVariables = mode === "dark" ? dark : light;

  return {
    algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorBgBase: themeVariables["color.background.body"],
      colorBgLayout: themeVariables["color.background.body"],
      colorBgContainer: themeVariables["color.background.component"],
      colorPrimary: themeVariables["color.primary"],
      colorLink: themeVariables["color.link"],
    },
  };
};

export default getAntDTheme;
