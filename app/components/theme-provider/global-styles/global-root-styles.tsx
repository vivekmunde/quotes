import { createGlobalStyle } from "styled-components";
import { TVariables } from "../theme/types";

export const GlobalCommonRootStyles = createGlobalStyle<{
  variables: Partial<TVariables>;
}>`
  body {
    font-family: ${(props) => props.variables["font.family"]};
    font-size: ${(props) => props.variables["font.size"]};
    font-weight: ${(props) => props.variables["font.weight"]};
    line-height: ${(props) => props.variables["line.height"]};
  }
`;

export const GlobalColorRootStyles = createGlobalStyle<{
  variables: Partial<TVariables>;
}>`
  body {
    background: ${(props) => props.variables["color.background.body"]};
    color: ${(props) => props.variables["font.color"]};
  }
`;
