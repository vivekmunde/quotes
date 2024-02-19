import { TThemeConfigurationVariables } from "../types";

const white = "#ffffff";
const green = "#03ac13";
const blue = "#1890ff";
const cyan = "#13c2c2";
const yellow = "#fadb14";
const orange = "#fa8c16";
const red = "#f5222d";
const purple = "#722ed1";
const pink = "#eb2f96";
const primaryColor = "#ec4899";
const successColor = green;
const infoColor = cyan;
const warningColor = orange;
const errorColor = red;

const spacing = "14px";

const fontFamily = "lato, sans-serif";
const fontSize = "14px";
const fontSizeSmall = "12px";
const fontSizeLarge = "18px";
const lineHeight = "1.5";

const borderRadius = "4px";
const borderRadiusSmall = "2px";
const borderRadiusLarge = "8px";

const commonVariables: TThemeConfigurationVariables = {
  "color.white": white,
  "color.blue": blue,
  "color.green": green,
  "color.cyan": cyan,
  "color.yellow": yellow,
  "color.orange": orange,
  "color.red": red,
  "color.purple": purple,
  "color.pink": pink,

  "color.primary": primaryColor,
  "color.success": successColor,
  "color.info": infoColor,
  "color.warning": warningColor,
  "color.error": errorColor,

  spacing: spacing,

  "font.family": fontFamily,
  "font.size": fontSize,
  "font.size.small": fontSizeSmall,
  "font.size.large": fontSizeLarge,
  "line.height": lineHeight,

  "border.radius": borderRadius,
  "border.radius.small": borderRadiusSmall,
  "border.radius.large": borderRadiusLarge,
};

export default commonVariables;
