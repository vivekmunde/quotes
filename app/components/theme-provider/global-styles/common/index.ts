import { TVariables } from "../../theme/types";
import getBackgroundStyles from "./get-background-styles";
import getBorderStyles from "./get-border-styles";
import getFlexStyles from "./get-flex-styles";
import _getRootStyles from "./get-root-styles";
import getSpacingStyles from "./get-spacing-styles";
import getTypographyStyles from "./get-typography-styles";

export const getRootStyles = (variables: TVariables) => {
  return `
    ${_getRootStyles(variables)}
  `;
};

export const getUtilityStyles = (variables: TVariables) => {
  return `
    ${getBackgroundStyles(variables)}
    ${getBorderStyles(variables)}
    ${getFlexStyles(variables)}
    ${getSpacingStyles(variables)}
    ${getTypographyStyles(variables)}
  `;
};
