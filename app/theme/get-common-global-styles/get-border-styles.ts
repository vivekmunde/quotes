import { TVariables } from "../types";

const getBorderStyles = (variables: Partial<TVariables>) => {
  return `
    .q-border-radius { border-radius: ${variables["border.radius"]}; }
    .q-border-radius-tl { border-top-left-radius: ${variables["border.radius"]}; }
    .q-border-radius-tr { border-top-right-radius: ${variables["border.radius"]}; }
    .q-border-radius-bl { border-bottom-left-radius: ${variables["border.radius"]}; }
    .q-border-radius-br { border-bottom-right-radius: ${variables["border.radius"]}; }
    .q-border-radius-sm { border-radius: ${variables["border.radius.small"]}; }
    .q-border-radius-tl-sm { border-top-left-radius: ${variables["border.radius.small"]}; }
    .q-border-radius-tr-sm { border-top-right-radius: ${variables["border.radius.small"]}; }
    .q-border-radius-bl-sm { border-bottom-left-radius: ${variables["border.radius.small"]}; }
    .q-border-radius-br-sm { border-bottom-right-radius: ${variables["border.radius.small"]}; }
    .q-border-radius-lg { border-radius: ${variables["border.radius.large"]}; }
    .q-border-radius-tl-lg { border-top-left-radius: ${variables["border.radius.large"]}; }
    .q-border-radius-tr-lg { border-top-right-radius: ${variables["border.radius.large"]}; }
    .q-border-radius-bl-lg { border-bottom-left-radius: ${variables["border.radius.large"]}; }
    .q-border-radius-br-lg { border-bottom-right-radius: ${variables["border.radius.large"]}; }
    .q-border-0 { border: none; }
    .q-border-l-0 { border-left: none; }
    .q-border-r-0 { border-right: none; }
    .q-border-t-0 { border-top: none; }
    .q-border-b-0 { border-bottom: none; }
  `;
};

export default getBorderStyles;
