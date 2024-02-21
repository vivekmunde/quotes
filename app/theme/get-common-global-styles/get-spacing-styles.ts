import { TVariables } from "../types";

const getSpacingStyles = (variables: Partial<TVariables>) => {
  return `
    .q-m { margin: ${variables["spacing"]}; }
    .q-m-l { margin-left: ${variables["spacing"]}; }
    .q-m-r { margin-right: ${variables["spacing"]}; }
    .q-m-t { margin-top: ${variables["spacing"]}; }
    .q-m-b { margin-bottom: ${variables["spacing"]}; }
    .q-m-1 { margin: ${variables["spacing.1"]}; }
    .q-m-2,.q-m-sm { margin: ${variables["spacing.2"]}; }
    .q-m-3 { margin: ${variables["spacing.3"]}; }
    .q-m-4 { margin: ${variables["spacing.4"]}; }
    .q-m-5 { margin: ${variables["spacing.5"]}; }
    .q-m-6,.q-m-lg { margin: ${variables["spacing.6"]}; }
    .q-m-7 { margin: ${variables["spacing.7"]}; }
    .q-m-8 { margin: ${variables["spacing.8"]}; }
    .q-m-9 { margin: ${variables["spacing.9"]}; }
    .q-m-10 { margin: ${variables["spacing.10"]}; }
    .q-m-0 { margin: 0; }
    .q-m-l-1 { margin-left: ${variables["spacing.1"]}; }
    .q-m-r-1 { margin-right: ${variables["spacing.1"]}; }
    .q-m-t-1 { margin-top: ${variables["spacing.1"]}; }
    .q-m-b-1 { margin-bottom: ${variables["spacing.1"]}; }
    .q-m-l-2,.q-m-l-sm { margin-left: ${variables["spacing.2"]}; }
    .q-m-r-2,.q-m-r-sm { margin-right: ${variables["spacing.2"]}; }
    .q-m-t-2,.q-m-t-sm { margin-top: ${variables["spacing.2"]}; }
    .q-m-b-2,.q-m-b-sm { margin-bottom: ${variables["spacing.2"]}; }
    .q-m-l-3 { margin-left: ${variables["spacing.3"]}; }
    .q-m-r-3 { margin-right: ${variables["spacing.3"]}; }
    .q-m-t-3 { margin-top: ${variables["spacing.3"]}; }
    .q-m-b-3 { margin-bottom: ${variables["spacing.3"]}; }
    .q-m-l-4 { margin-left: ${variables["spacing.4"]}; }
    .q-m-r-4 { margin-right: ${variables["spacing.4"]}; }
    .q-m-t-4 { margin-top: ${variables["spacing.4"]}; }
    .q-m-b-4 { margin-bottom: ${variables["spacing.4"]}; }
    .q-m-l-5 { margin-left: ${variables["spacing.5"]}; }
    .q-m-r-5 { margin-right: ${variables["spacing.5"]}; }
    .q-m-t-5 { margin-top: ${variables["spacing.5"]}; }
    .q-m-b-5 { margin-bottom: ${variables["spacing.5"]}; }
    .q-m-l-6,.q-m-l-lg { margin-left: ${variables["spacing.6"]}; }
    .q-m-r-6,.q-m-r-lg { margin-right: ${variables["spacing.6"]}; }
    .q-m-t-6,.q-m-t-lg { margin-top: ${variables["spacing.6"]}; }
    .q-m-b-6,.q-m-b-lg { margin-bottom: ${variables["spacing.6"]}; }
    .q-m-l-7 { margin-left: ${variables["spacing.7"]}; }
    .q-m-r-7 { margin-right: ${variables["spacing.7"]}; }
    .q-m-t-7 { margin-top: ${variables["spacing.7"]}; }
    .q-m-b-7 { margin-bottom: ${variables["spacing.7"]}; }
    .q-m-l-8 { margin-left: ${variables["spacing.8"]}; }
    .q-m-r-8 { margin-right: ${variables["spacing.8"]}; }
    .q-m-t-8 { margin-top: ${variables["spacing.8"]}; }
    .q-m-b-8 { margin-bottom: ${variables["spacing.8"]}; }
    .q-m-l-9 { margin-left: ${variables["spacing.9"]}; }
    .q-m-r-9 { margin-right: ${variables["spacing.9"]}; }
    .q-m-t-9 { margin-top: ${variables["spacing.9"]}; }
    .q-m-b-9 { margin-bottom: ${variables["spacing.9"]}; }
    .q-m-l-10 { margin-left: ${variables["spacing.10"]}; }
    .q-m-r-10 { margin-right: ${variables["spacing.10"]}; }
    .q-m-t-10 { margin-top: ${variables["spacing.10"]}; }
    .q-m-b-10 { margin-bottom: ${variables["spacing.10"]}; }
    .q-m-x-0 { margin-left: 0; margin-right: 0; }
    .q-m-y-0 { margin-top: 0; margin-bottom: 0; }
    .q-m-l-0 { margin-left: 0; }
    .q-m-r-0 { margin-right: 0; }
    .q-m-t-0 { margin-top: 0; }
    .q-m-b-0 { margin-bottom: 0 !important; }
    .q-p { padding: ${variables["spacing"]}; }
    .q-p-2,.q-p-sm { padding: ${variables["spacing.2"]}; }
    .q-p-3 { padding: ${variables["spacing.3"]}; }
    .q-p-4 { padding: ${variables["spacing.4"]}; }
    .q-p-5 { padding: ${variables["spacing.5"]}; }
    .q-p-6,.q-p-lg { padding: ${variables["spacing.6"]}; }
    .q-p-7 { padding: ${variables["spacing.7"]}; }
    .q-p-8 { padding: ${variables["spacing.8"]}; }
    .q-p-9 { padding: ${variables["spacing.9"]}; }
    .q-p-10 { padding: ${variables["spacing.10"]}; }
    .q-p-0 { padding: 0; }
    .q-p-l { padding-left: ${variables["spacing"]}; }
    .q-p-r { padding-right: ${variables["spacing"]}; }
    .q-p-t { padding-top: ${variables["spacing"]}; }
    .q-p-b { padding-bottom: ${variables["spacing"]}; }
    .q-p-1 { padding: ${variables["spacing.1"]}; }
    .q-p-l-1 { padding-left: ${variables["spacing.1"]}; }
    .q-p-r-1 { padding-right: ${variables["spacing.1"]}; }
    .q-p-t-1 { padding-top: ${variables["spacing.1"]}; }
    .q-p-b-1 { padding-bottom: ${variables["spacing.1"]}; }
    .q-p-l-2,.q-p-l-sm { padding-left: ${variables["spacing.2"]}; }
    .q-p-r-2,.q-p-r-sm { padding-right: ${variables["spacing.2"]}; }
    .q-p-t-2,.q-p-t-sm { padding-top: ${variables["spacing.2"]}; }
    .q-p-b-2,.q-p-b-sm { padding-bottom: ${variables["spacing.2"]}; }
    .q-p-l-3 { padding-left: ${variables["spacing.3"]}; }
    .q-p-r-3 { padding-right: ${variables["spacing.3"]}; }
    .q-p-t-3 { padding-top: ${variables["spacing.3"]}; }
    .q-p-b-3 { padding-bottom: ${variables["spacing.3"]}; }
    .q-p-l-4 { padding-left: ${variables["spacing.4"]}; }
    .q-p-r-4 { padding-right: ${variables["spacing.4"]}; }
    .q-p-t-4 { padding-top: ${variables["spacing.4"]}; }
    .q-p-b-4 { padding-bottom: ${variables["spacing.4"]}; }
    .q-p-l-5 { padding-left: ${variables["spacing.5"]}; }
    .q-p-r-5 { padding-right: ${variables["spacing.5"]}; }
    .q-p-t-5 { padding-top: ${variables["spacing.5"]}; }
    .q-p-b-5 { padding-bottom: ${variables["spacing.5"]}; }
    .q-p-l-6,.q-p-l-lg { padding-left: ${variables["spacing.6"]}; }
    .q-p-r-6,.q-p-r-lg { padding-right: ${variables["spacing.6"]}; }
    .q-p-t-6,.q-p-t-lg { padding-top: ${variables["spacing.6"]}; }
    .q-p-b-6,.q-p-b-lg { padding-bottom: ${variables["spacing.6"]}; }
    .q-p-l-7 { padding-left: ${variables["spacing.7"]}; }
    .q-p-r-7 { padding-right: ${variables["spacing.7"]}; }
    .q-p-t-7 { padding-top: ${variables["spacing.7"]}; }
    .q-p-b-7 { padding-bottom: ${variables["spacing.7"]}; }
    .q-p-l-8 { padding-left: ${variables["spacing.8"]}; }
    .q-p-r-8 { padding-right: ${variables["spacing.8"]}; }
    .q-p-t-8 { padding-top: ${variables["spacing.8"]}; }
    .q-p-b-8 { padding-bottom: ${variables["spacing.8"]}; }
    .q-p-l-9 { padding-left: ${variables["spacing.9"]}; }
    .q-p-r-9 { padding-right: ${variables["spacing.9"]}; }
    .q-p-t-9 { padding-top: ${variables["spacing.9"]}; }
    .q-p-b-9 { padding-bottom: ${variables["spacing.9"]}; }
    .q-p-l-10 { padding-left: ${variables["spacing.10"]}; }
    .q-p-r-10 { padding-right: ${variables["spacing.10"]}; }
    .q-p-t-10 { padding-top: ${variables["spacing.10"]}; }
    .q-p-b-10 { padding-bottom: ${variables["spacing.10"]}; }
    .q-p-x-0 { padding-left: 0; padding-right: 0; }
    .q-p-y-0 { padding-top: 0; padding-bottom: 0; }
    .q-p-l-0 { padding-left: 0; }
    .q-p-r-0 { padding-right: 0; }
    .q-p-t-0 { padding-top: 0; }
    .q-p-b-0 { padding-bottom: 0; }
  `;
};

export default getSpacingStyles;
