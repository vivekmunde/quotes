import { ThemeConfig, theme } from "antd";
import { TMode } from "./types";
import dark from "./variables/dark";
import light from "./variables/light";

const getNumericValue = (str: string | undefined) => {
  if (str) {
    try {
      return Number(str.replace(/[^0-9.]/g, ""));
    } catch (err: any) {
      console.error(err);
    }
  }
  return undefined;
};

export const getToken = (mode?: TMode) => {
  const variables = mode === "dark" ? dark : light;

  const token = {
    padding: getNumericValue(variables["spacing"]),
    margin: getNumericValue(variables["spacing"]),

    fontFamily: variables["font.family"],
    fontSize: getNumericValue(variables["font.size"]),
    fontSizeSM: getNumericValue(variables["font.size.small"]),
    fontSizeLG: getNumericValue(variables["font.size.large"]),
    lineHeight: getNumericValue(variables["line.height"]),

    colorBgBase: variables["color.background.body"],
    colorBgLayout: variables["color.background.body"],
    colorBgContainer: variables["color.background.component"],

    colorTextBase: variables["font.color"],
    colorText: variables["font.color"],
    colorTextSecondary:
      mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)",
    colorTextTertiary:
      mode === "dark" ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)",
    colorTextQuaternary:
      mode === "dark" ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",

    borderRadius: getNumericValue(variables["border.radius"]),
    borderRadiusSM: getNumericValue(variables["border.radius.small"]),
    borderRadiusLG: getNumericValue(variables["border.radius.large"]),
    colorBorder: variables["border.color"],

    colorPrimary: variables["color.primary"],
    colorSuccess: variables["color.success"],
    colorInfo: variables["color.info"],
    colorWarning: variables["color.warning"],
    colorError: variables["color.error"],

    colorLink: variables["color.link"],
    colorLinkHover: variables["color.link.hover"],
    colorLinkActive: variables["color.link.active"],

    blue: variables["color.blue"],
    green: variables["color.green"],
    cyan: variables["color.cyan"],
    yellow: variables["color.yellow"],
    orange: variables["color.orange"],
    red: variables["color.red"],
    purple: variables["color.purple"],
    pink: variables["color.pink"],
  };

  return token;
};

const getAntDTheme = (mode?: TMode): ThemeConfig => {
  return {
    algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: getToken(mode),
  };
};

export default getAntDTheme;
