import { createGlobalStyle } from "styled-components";
import { TThemeVariables } from "./types";

const GlobalRootStyles = createGlobalStyle<{
  variables: Partial<TThemeVariables>;
}>`
  body {
    background: ${(props) => props.variables["color.background.body"]};
  }
`;

export default GlobalRootStyles;
