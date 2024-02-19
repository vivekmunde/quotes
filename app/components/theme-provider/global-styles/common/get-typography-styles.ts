import { TVariables } from "../../theme/types";

const getTypographyStyles = (variables: Partial<TVariables>) => {
  return `
     h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5 { margin-top: 0; }
    .n-font-weight-thin { font-weight: 200; }
    .n-font-weight-light { font-weight: 300; }
    .n-font-weight-normal { font-weight: normal; }
    .n-font-weight-medium { font-weight: 500; }
    strong,.n-font-bold { font-weight: bold; }
    .n-font-size-default { font-size: ${variables["font.size"]}; }
    small,.n-font-size-sm { font-size: ${variables["font.size.small"]}; }
    .n-font-size-lg { font-size: ${variables["font.size.large"]}; }
  `;
};

export default getTypographyStyles;
