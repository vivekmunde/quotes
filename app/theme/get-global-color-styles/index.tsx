import { TVariables } from "../types";
import getBackgroundStyles from "./global-background-styles";
import getBorderStyles from "./global-border-styles";
import getColorStyles from "./global-color-styles";
import getRootStyles from "./global-root-styles";

const getGlobalColorStyles = (variables: TVariables) => {
  return ` 
    ${getRootStyles(variables)}
    ${getBackgroundStyles(variables)}
    ${getBorderStyles(variables)}
    ${getColorStyles(variables)}
  `;
};

export default getGlobalColorStyles;
