import { TVariables } from "../types";

const getRootStyles = (variables: Partial<TVariables>) => {
  return `
    * { margin: 0; padding: 0; }
    body {
      font-family: ${variables["font.family"]};
      font-size: ${variables["font.size"]};
      font-weight: ${variables["font.weight"]};
      line-height: ${variables["line.height"]};
    }
  `;
};

export default getRootStyles;
