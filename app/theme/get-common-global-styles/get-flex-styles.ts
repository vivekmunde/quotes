import { TVariables } from "../types";

const getFlexStyles = (variables: Partial<TVariables>) => {
  return `
    .q-flex { display: flex; }
    .q-flex-row { flex-direction: row; }
    .q-flex-column { flex-direction: column; }
    .q-flex-row-reverse { flex-direction: row-reverse; }
    .q-flex-wrap { flex-wrap: wrap; }
    .q-gap-1 { gap: ${variables["spacing.1"]}; }
    .q-gap-2 { gap: ${variables["spacing.2"]}; }
    .q-gap-3 { gap: ${variables["spacing.3"]}; }
    .q-gap-4 { gap: ${variables["spacing.4"]}; }
    .q-gap-5 { gap: ${variables["spacing.5"]}; }
    .q-gap-6 { gap: ${variables["spacing.6"]}; }
    .q-gap-7 { gap: ${variables["spacing.7"]}; }
    .q-gap-8 { gap: ${variables["spacing.8"]}; }
    .q-gap-9 { gap: ${variables["spacing.9"]}; }
    .q-gap-10 { gap: ${variables["spacing.10"]}; }
    .q-align-items-center { align-items: center; }
    .q-align-items-start { align-items: flex-start; }
    .q-align-items-end { align-items: flex-end; }
    .q-align-items-baseline { align-items: baseline; }
    .q-justify-content-center { justify-content: center; }
    .q-justify-content-start { justify-content: flex-start; }
    .q-justify-content-end { justify-content: flex-end; }
    .q-justify-content-between { justify-content: space-between; }
    .q-justify-content-around { justify-content: space-around; }
    .q-justify-content-evenly { justify-content: space-evenly; }
    .q-flex-1 { flex: 1; }
    .q-flex-2 { flex: 2; }
    .q-flex-3 { flex: 3; }
    .q-flex-4 { flex: 4; }
    .q-flex-5 { flex: 5; }
    .q-flex-6 { flex: 6; }
    .q-flex-7 { flex: 7; }
    .q-flex-8 { flex: 8; }
    .q-flex-9 { flex: 9; }
    .q-flex-10 { flex: 10; }
  `;
};

export default getFlexStyles;
