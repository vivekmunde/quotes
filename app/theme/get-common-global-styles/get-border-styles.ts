import { TVariables } from "../types";

const getBorderStyles = (variables: Partial<TVariables>) => {
  return `
    .n-border-radius { border-radius: ${variables["border.radius"]}; }
    .n-border-radius-tl { border-top-left-radius: ${variables["border.radius"]}; }
    .n-border-radius-tr { border-top-right-radius: ${variables["border.radius"]}; }
    .n-border-radius-bl { border-bottom-left-radius: ${variables["border.radius"]}; }
    .n-border-radius-br { border-bottom-right-radius: ${variables["border.radius"]}; }
    .n-border-radius-sm { border-radius: ${variables["border.radius.small"]}; }
    .n-border-radius-tl-sm { border-top-left-radius: ${variables["border.radius.small"]}; }
    .n-border-radius-tr-sm { border-top-right-radius: ${variables["border.radius.small"]}; }
    .n-border-radius-bl-sm { border-bottom-left-radius: ${variables["border.radius.small"]}; }
    .n-border-radius-br-sm { border-bottom-right-radius: ${variables["border.radius.small"]}; }
    .n-border-radius-lg { border-radius: ${variables["border.radius.large"]}; }
    .n-border-radius-tl-lg { border-top-left-radius: ${variables["border.radius.large"]}; }
    .n-border-radius-tr-lg { border-top-right-radius: ${variables["border.radius.large"]}; }
    .n-border-radius-bl-lg { border-bottom-left-radius: ${variables["border.radius.large"]}; }
    .n-border-radius-br-lg { border-bottom-right-radius: ${variables["border.radius.large"]}; }
    .n-border-0 { border: none; }
    .n-border-l-0 { border-left: none; }
    .n-border-r-0 { border-right: none; }
    .n-border-t-0 { border-top: none; }
    .n-border-b-0 { border-bottom: none; }
  `;
};

export default getBorderStyles;
