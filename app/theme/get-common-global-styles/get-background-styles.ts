import { TVariables } from "../types";

const getBackgroundStyles = (variables: Partial<TVariables>) => {
  return `
    .q-bg-transparent { background-color: transparent; }
  `;
};

export default getBackgroundStyles;
