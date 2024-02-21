import { createGlobalStyle } from "styled-components";
import getGlobalColorStyles from "~/theme/get-global-color-styles";
import { TVariables } from "../../theme/types";

const GlobalColorStyles = createGlobalStyle<{
  variables: TVariables;
}>`${(props) => getGlobalColorStyles(props.variables)}`;

export default GlobalColorStyles;
