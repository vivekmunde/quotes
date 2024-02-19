import { TVariables } from "../../theme/types";

const getBackgroundStyles = (variables: Partial<TVariables>) => {
  return `
    .n-bg-transparent { background-color: transparent; }
  `;
};

export default getBackgroundStyles;
