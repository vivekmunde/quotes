import { TVariables } from "../types";

const getTypographyStyles = (variables: Partial<TVariables>) => {
  return `
     h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5 { margin-top: 0; }
    .q-font-weight-thin { font-weight: 200; }
    .q-font-weight-light { font-weight: 300; }
    .q-font-weight-normal { font-weight: normal; }
    .q-font-weight-medium { font-weight: 500; }
    strong,.q-font-bold { font-weight: bold; }
    .q-font-size-default { font-size: ${variables["font.size"]}; }
    small,.q-font-size-sm { font-size: ${variables["font.size.small"]}; }
    .q-font-size-lg { font-size: ${variables["font.size.large"]}; }
  `;
};

export default getTypographyStyles;
