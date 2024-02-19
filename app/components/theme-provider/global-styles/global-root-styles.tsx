import { createGlobalStyle } from "styled-components";
import { TVariables } from "../../../theme/types";

const GlobalRootStyles = createGlobalStyle<{
  variables: Partial<TVariables>;
}>`
  body {
    background: ${(props) => props.variables["color.background.body"]};
    color: ${(props) => props.variables["font.color"]};
  }
`;

export default GlobalRootStyles;
