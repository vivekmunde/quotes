import { TVariables } from "../../theme/types";

const getFlexStyles = (variables: Partial<TVariables>) => {
  return `
    .n-flex { display: flex; }
    .n-flex-row { flex-direction: row; }
    .n-flex-column { flex-direction: column; }
    .n-flex-row-reverse { flex-direction: row-reverse; }
    .n-flex-wrap { flex-wrap: wrap; }
    .n-gap-1 { gap: ${variables["spacing.1"]}; }
    .n-gap-2 { gap: ${variables["spacing.2"]}; }
    .n-gap-3 { gap: ${variables["spacing.3"]}; }
    .n-gap-4 { gap: ${variables["spacing.4"]}; }
    .n-gap-5 { gap: ${variables["spacing.5"]}; }
    .n-gap-6 { gap: ${variables["spacing.6"]}; }
    .n-gap-7 { gap: ${variables["spacing.7"]}; }
    .n-gap-8 { gap: ${variables["spacing.8"]}; }
    .n-gap-9 { gap: ${variables["spacing.9"]}; }
    .n-gap-10 { gap: ${variables["spacing.10"]}; }
    .n-align-items-center { align-items: center; }
    .n-align-items-start { align-items: flex-start; }
    .n-align-items-end { align-items: flex-end; }
    .n-align-items-baseline { align-items: baseline; }
    .n-justify-content-center { justify-content: center; }
    .n-justify-content-start { justify-content: flex-start; }
    .n-justify-content-end { justify-content: flex-end; }
    .n-justify-content-between { justify-content: space-between; }
    .n-justify-content-around { justify-content: space-around; }
    .n-justify-content-evenly { justify-content: space-evenly; }
    .n-flex-1 { flex: 1; }
    .n-flex-2 { flex: 2; }
    .n-flex-3 { flex: 3; }
    .n-flex-4 { flex: 4; }
    .n-flex-5 { flex: 5; }
    .n-flex-6 { flex: 6; }
    .n-flex-7 { flex: 7; }
    .n-flex-8 { flex: 8; }
    .n-flex-9 { flex: 9; }
    .n-flex-10 { flex: 10; }
  `;
};

export default getFlexStyles;
