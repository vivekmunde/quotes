import { theme } from "antd";
import {
  TMode,
  TThemeConfigurationVariables,
  TVariables,
} from "../theme/types";
import { getToken } from "./get-antd-theme";
import getColorShades from "./get-color-shades";
import getGrayShades from "./get-gray-shades";
import getSpacingVariants from "./get-spacing-variants";

const getVariables = (args: {
  mode?: TMode;
  variables: TThemeConfigurationVariables;
}): TVariables => {
  const { mode, variables } = args;

  const token = theme.getDesignToken({
    algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: getToken(mode),
  });

  const spacingVariants = getSpacingVariants(variables.spacing);
  const grayColorShades = getGrayShades(mode);
  const primaryColorShades = getColorShades(token.colorPrimary, mode);
  const successColorShades = getColorShades(token.colorSuccess, mode);
  const infoColorShades = getColorShades(token.colorInfo, mode);
  const warningColorShades = getColorShades(token.colorWarning, mode);
  const errorColorShades = getColorShades(token.colorError, mode);

  return {
    "color.white": token.colorWhite,

    "color.gray.1": grayColorShades[1],
    "color.gray.2": grayColorShades[2],
    "color.gray.3": grayColorShades[3],
    "color.gray.4": grayColorShades[4],
    "color.gray.5": grayColorShades[5],
    "color.gray.6": grayColorShades[6],
    "color.gray.7": grayColorShades[7],
    "color.gray.8": grayColorShades[8],
    "color.gray.9": grayColorShades[9],
    "color.gray.10": grayColorShades[10],

    "color.green": token.green,
    "color.green.1": token.green1,
    "color.green.2": token.green2,
    "color.green.3": token.green3,
    "color.green.4": token.green4,
    "color.green.5": token.green5,
    "color.green.6": token.green6,
    "color.green.7": token.green7,
    "color.green.8": token.green8,
    "color.green.9": token.green9,
    "color.green.10": token.green10,

    "color.blue": token.blue,
    "color.blue.1": token.blue1,
    "color.blue.2": token.blue2,
    "color.blue.3": token.blue3,
    "color.blue.4": token.blue4,
    "color.blue.5": token.blue5,
    "color.blue.6": token.blue6,
    "color.blue.7": token.blue7,
    "color.blue.8": token.blue8,
    "color.blue.9": token.blue9,
    "color.blue.10": token.blue10,

    "color.cyan": token.cyan,
    "color.cyan.1": token.cyan1,
    "color.cyan.2": token.cyan2,
    "color.cyan.3": token.cyan3,
    "color.cyan.4": token.cyan4,
    "color.cyan.5": token.cyan5,
    "color.cyan.6": token.cyan6,
    "color.cyan.7": token.cyan7,
    "color.cyan.8": token.cyan8,
    "color.cyan.9": token.cyan9,
    "color.cyan.10": token.cyan10,

    "color.yellow": token.yellow,
    "color.yellow.1": token.yellow1,
    "color.yellow.2": token.yellow2,
    "color.yellow.3": token.yellow3,
    "color.yellow.4": token.yellow4,
    "color.yellow.5": token.yellow5,
    "color.yellow.6": token.yellow6,
    "color.yellow.7": token.yellow7,
    "color.yellow.8": token.yellow8,
    "color.yellow.9": token.yellow9,
    "color.yellow.10": token.yellow10,

    "color.orange": token.orange,
    "color.orange.1": token.orange1,
    "color.orange.2": token.orange2,
    "color.orange.3": token.orange3,
    "color.orange.4": token.orange4,
    "color.orange.5": token.orange5,
    "color.orange.6": token.orange6,
    "color.orange.7": token.orange7,
    "color.orange.8": token.orange8,
    "color.orange.9": token.orange9,
    "color.orange.10": token.orange10,

    "color.red": token.red,
    "color.red.1": token.red1,
    "color.red.2": token.red2,
    "color.red.3": token.red3,
    "color.red.4": token.red4,
    "color.red.5": token.red5,
    "color.red.6": token.red6,
    "color.red.7": token.red7,
    "color.red.8": token.red8,
    "color.red.9": token.red9,
    "color.red.10": token.red10,

    "color.purple": token.purple,
    "color.purple.1": token.purple1,
    "color.purple.2": token.purple2,
    "color.purple.3": token.purple3,
    "color.purple.4": token.purple4,
    "color.purple.5": token.purple5,
    "color.purple.6": token.purple6,
    "color.purple.7": token.purple7,
    "color.purple.8": token.purple8,
    "color.purple.9": token.purple9,
    "color.purple.10": token.purple10,

    "color.pink": token.pink,
    "color.pink.1": token.pink1,
    "color.pink.2": token.pink2,
    "color.pink.3": token.pink3,
    "color.pink.4": token.pink4,
    "color.pink.5": token.pink5,
    "color.pink.6": token.pink6,
    "color.pink.7": token.pink7,
    "color.pink.8": token.pink8,
    "color.pink.9": token.pink9,
    "color.pink.10": token.pink10,

    "color.primary": token.colorPrimary,
    "color.primary.1": primaryColorShades[1],
    "color.primary.2": primaryColorShades[2],
    "color.primary.3": primaryColorShades[3],
    "color.primary.4": primaryColorShades[4],
    "color.primary.5": primaryColorShades[5],
    "color.primary.6": primaryColorShades[6],
    "color.primary.7": primaryColorShades[7],
    "color.primary.8": primaryColorShades[8],
    "color.primary.9": primaryColorShades[9],
    "color.primary.10": primaryColorShades[10],

    "color.success": token.colorSuccess,
    "color.success.1": successColorShades[1],
    "color.success.2": successColorShades[2],
    "color.success.3": successColorShades[3],
    "color.success.4": successColorShades[4],
    "color.success.5": successColorShades[5],
    "color.success.6": successColorShades[6],
    "color.success.7": successColorShades[7],
    "color.success.8": successColorShades[8],
    "color.success.9": successColorShades[9],
    "color.success.10": successColorShades[10],

    "color.info": token.colorInfo,
    "color.info.1": infoColorShades[1],
    "color.info.2": infoColorShades[2],
    "color.info.3": infoColorShades[3],
    "color.info.4": infoColorShades[4],
    "color.info.5": infoColorShades[5],
    "color.info.6": infoColorShades[6],
    "color.info.7": infoColorShades[7],
    "color.info.8": infoColorShades[8],
    "color.info.9": infoColorShades[9],
    "color.info.10": infoColorShades[10],

    "color.warning": token.colorWarning,
    "color.warning.1": warningColorShades[1],
    "color.warning.2": warningColorShades[2],
    "color.warning.3": warningColorShades[3],
    "color.warning.4": warningColorShades[4],
    "color.warning.5": warningColorShades[5],
    "color.warning.6": warningColorShades[6],
    "color.warning.7": warningColorShades[7],
    "color.warning.8": warningColorShades[8],
    "color.warning.9": warningColorShades[9],
    "color.warning.10": warningColorShades[10],

    "color.error": token.colorError,
    "color.error.1": errorColorShades[1],
    "color.error.2": errorColorShades[2],
    "color.error.3": errorColorShades[3],
    "color.error.4": errorColorShades[4],
    "color.error.5": errorColorShades[5],
    "color.error.6": errorColorShades[6],
    "color.error.7": errorColorShades[7],
    "color.error.8": errorColorShades[8],
    "color.error.9": errorColorShades[9],
    "color.error.10": errorColorShades[10],

    "color.background.body": token.colorBgBase,
    "color.background.component": token.colorBgContainer,

    "color.link": token.colorLink,
    "color.link.hover": token.colorLinkHover,
    "color.link.active": token.colorLinkActive,

    spacing: spacingVariants[4],
    "spacing.1": spacingVariants[1],
    "spacing.2": spacingVariants[2],
    "spacing.3": spacingVariants[3],
    "spacing.4": spacingVariants[4],
    "spacing.5": spacingVariants[5],
    "spacing.6": spacingVariants[6],
    "spacing.7": spacingVariants[7],
    "spacing.8": spacingVariants[8],
    "spacing.9": spacingVariants[9],
    "spacing.10": spacingVariants[10],

    "font.family": token.fontFamily,
    "font.size": `${token.fontSize}px`,
    "font.weight": "normal",
    "font.size.small": `${token.fontSizeSM}px`,
    "font.size.large": `${token.fontSizeLG}px`,
    "font.color": token.colorText,
    "font.color.secondary": token.colorTextSecondary,
    "line.height": `${token.lineHeight}`,

    "border.color": token.colorBorder,
    "border.color.secondary": token.colorBorderSecondary,
    "border.radius": `${token.borderRadius}px`,
    "border.radius.small": `${token.borderRadiusSM}px`,
    "border.radius.large": `${token.borderRadiusLG}px`,
  };
};

export default getVariables;
