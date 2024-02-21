import { TVariables } from "../types";

const getRootStyles = (variables: TVariables) => `
  body {
    background: ${variables["color.background.body"]};
    color: ${variables["font.color"]};
  }
`;

export default getRootStyles;
