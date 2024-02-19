import { TThemeConfigurationVariables } from "../types";
import commonVariables from "./common";

const bodyBackgroundColor = "#ffffff";
const componentBackgroundColor = "#ffffff";

const fontColor = "#000000";

const borderColor = "#e4e4e7";

const variables: TThemeConfigurationVariables = {
  ...commonVariables,
  "color.background.body": bodyBackgroundColor,
  "color.background.component": componentBackgroundColor,
  "font.color": fontColor,
  "border.color": borderColor,
  "color.link": commonVariables["color.primary"],
};

export default variables;
