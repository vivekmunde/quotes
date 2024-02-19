import { TThemeConfigurationVariables } from "../types";
import commonVariables from "./common";

const bodyBackgroundColor = "#000000";
const componentBackgroundColor = "#000000";

const fontColor = "#f4f4f4";

const borderColor = "#434346";

const variables: TThemeConfigurationVariables = {
  ...commonVariables,
  "color.background.body": bodyBackgroundColor,
  "color.background.component": componentBackgroundColor,
  "font.color": fontColor,
  "border.color": borderColor,
  "color.link": commonVariables["color.primary"],
};

export default variables;
