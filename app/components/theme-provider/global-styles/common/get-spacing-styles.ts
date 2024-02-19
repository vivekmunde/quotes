import { TVariables } from "../../theme/types";

const getSpacingStyles = (variables: Partial<TVariables>) => {
  return `
    .n-m { margin: ${variables["spacing"]}; }
    .n-m-l { margin-left: ${variables["spacing"]}; }
    .n-m-r { margin-right: ${variables["spacing"]}; }
    .n-m-t { margin-top: ${variables["spacing"]}; }
    .n-m-b { margin-bottom: ${variables["spacing"]}; }
    .n-m-1 { margin: ${variables["spacing.1"]}; }
    .n-m-2,.n-m-sm { margin: ${variables["spacing.2"]}; }
    .n-m-3 { margin: ${variables["spacing.3"]}; }
    .n-m-4 { margin: ${variables["spacing.4"]}; }
    .n-m-5 { margin: ${variables["spacing.5"]}; }
    .n-m-6,.n-m-lg { margin: ${variables["spacing.6"]}; }
    .n-m-7 { margin: ${variables["spacing.7"]}; }
    .n-m-8 { margin: ${variables["spacing.8"]}; }
    .n-m-9 { margin: ${variables["spacing.9"]}; }
    .n-m-10 { margin: ${variables["spacing.10"]}; }
    .n-m-0 { margin: 0; }
    .n-m-l-1 { margin-left: ${variables["spacing.1"]}; }
    .n-m-r-1 { margin-right: ${variables["spacing.1"]}; }
    .n-m-t-1 { margin-top: ${variables["spacing.1"]}; }
    .n-m-b-1 { margin-bottom: ${variables["spacing.1"]}; }
    .n-m-l-2,.n-m-l-sm { margin-left: ${variables["spacing.2"]}; }
    .n-m-r-2,.n-m-r-sm { margin-right: ${variables["spacing.2"]}; }
    .n-m-t-2,.n-m-t-sm { margin-top: ${variables["spacing.2"]}; }
    .n-m-b-2,.n-m-b-sm { margin-bottom: ${variables["spacing.2"]}; }
    .n-m-l-3 { margin-left: ${variables["spacing.3"]}; }
    .n-m-r-3 { margin-right: ${variables["spacing.3"]}; }
    .n-m-t-3 { margin-top: ${variables["spacing.3"]}; }
    .n-m-b-3 { margin-bottom: ${variables["spacing.3"]}; }
    .n-m-l-4 { margin-left: ${variables["spacing.4"]}; }
    .n-m-r-4 { margin-right: ${variables["spacing.4"]}; }
    .n-m-t-4 { margin-top: ${variables["spacing.4"]}; }
    .n-m-b-4 { margin-bottom: ${variables["spacing.4"]}; }
    .n-m-l-5 { margin-left: ${variables["spacing.5"]}; }
    .n-m-r-5 { margin-right: ${variables["spacing.5"]}; }
    .n-m-t-5 { margin-top: ${variables["spacing.5"]}; }
    .n-m-b-5 { margin-bottom: ${variables["spacing.5"]}; }
    .n-m-l-6,.n-m-l-lg { margin-left: ${variables["spacing.6"]}; }
    .n-m-r-6,.n-m-r-lg { margin-right: ${variables["spacing.6"]}; }
    .n-m-t-6,.n-m-t-lg { margin-top: ${variables["spacing.6"]}; }
    .n-m-b-6,.n-m-b-lg { margin-bottom: ${variables["spacing.6"]}; }
    .n-m-l-7 { margin-left: ${variables["spacing.7"]}; }
    .n-m-r-7 { margin-right: ${variables["spacing.7"]}; }
    .n-m-t-7 { margin-top: ${variables["spacing.7"]}; }
    .n-m-b-7 { margin-bottom: ${variables["spacing.7"]}; }
    .n-m-l-8 { margin-left: ${variables["spacing.8"]}; }
    .n-m-r-8 { margin-right: ${variables["spacing.8"]}; }
    .n-m-t-8 { margin-top: ${variables["spacing.8"]}; }
    .n-m-b-8 { margin-bottom: ${variables["spacing.8"]}; }
    .n-m-l-9 { margin-left: ${variables["spacing.9"]}; }
    .n-m-r-9 { margin-right: ${variables["spacing.9"]}; }
    .n-m-t-9 { margin-top: ${variables["spacing.9"]}; }
    .n-m-b-9 { margin-bottom: ${variables["spacing.9"]}; }
    .n-m-l-10 { margin-left: ${variables["spacing.10"]}; }
    .n-m-r-10 { margin-right: ${variables["spacing.10"]}; }
    .n-m-t-10 { margin-top: ${variables["spacing.10"]}; }
    .n-m-b-10 { margin-bottom: ${variables["spacing.10"]}; }
    .n-m-x-0 { margin-left: 0; margin-right: 0; }
    .n-m-y-0 { margin-top: 0; margin-bottom: 0; }
    .n-m-l-0 { margin-left: 0; }
    .n-m-r-0 { margin-right: 0; }
    .n-m-t-0 { margin-top: 0; }
    .n-m-b-0 { margin-bottom: 0 !important; }
    .n-p { padding: ${variables["spacing"]}; }
    .n-p-2,.n-p-sm { padding: ${variables["spacing.2"]}; }
    .n-p-3 { padding: ${variables["spacing.3"]}; }
    .n-p-4 { padding: ${variables["spacing.4"]}; }
    .n-p-5 { padding: ${variables["spacing.5"]}; }
    .n-p-6,.n-p-lg { padding: ${variables["spacing.6"]}; }
    .n-p-7 { padding: ${variables["spacing.7"]}; }
    .n-p-8 { padding: ${variables["spacing.8"]}; }
    .n-p-9 { padding: ${variables["spacing.9"]}; }
    .n-p-10 { padding: ${variables["spacing.10"]}; }
    .n-p-0 { padding: 0; }
    .n-p-l { padding-left: ${variables["spacing"]}; }
    .n-p-r { padding-right: ${variables["spacing"]}; }
    .n-p-t { padding-top: ${variables["spacing"]}; }
    .n-p-b { padding-bottom: ${variables["spacing"]}; }
    .n-p-1 { padding: ${variables["spacing.1"]}; }
    .n-p-l-1 { padding-left: ${variables["spacing.1"]}; }
    .n-p-r-1 { padding-right: ${variables["spacing.1"]}; }
    .n-p-t-1 { padding-top: ${variables["spacing.1"]}; }
    .n-p-b-1 { padding-bottom: ${variables["spacing.1"]}; }
    .n-p-l-2,.n-p-l-sm { padding-left: ${variables["spacing.2"]}; }
    .n-p-r-2,.n-p-r-sm { padding-right: ${variables["spacing.2"]}; }
    .n-p-t-2,.n-p-t-sm { padding-top: ${variables["spacing.2"]}; }
    .n-p-b-2,.n-p-b-sm { padding-bottom: ${variables["spacing.2"]}; }
    .n-p-l-3 { padding-left: ${variables["spacing.3"]}; }
    .n-p-r-3 { padding-right: ${variables["spacing.3"]}; }
    .n-p-t-3 { padding-top: ${variables["spacing.3"]}; }
    .n-p-b-3 { padding-bottom: ${variables["spacing.3"]}; }
    .n-p-l-4 { padding-left: ${variables["spacing.4"]}; }
    .n-p-r-4 { padding-right: ${variables["spacing.4"]}; }
    .n-p-t-4 { padding-top: ${variables["spacing.4"]}; }
    .n-p-b-4 { padding-bottom: ${variables["spacing.4"]}; }
    .n-p-l-5 { padding-left: ${variables["spacing.5"]}; }
    .n-p-r-5 { padding-right: ${variables["spacing.5"]}; }
    .n-p-t-5 { padding-top: ${variables["spacing.5"]}; }
    .n-p-b-5 { padding-bottom: ${variables["spacing.5"]}; }
    .n-p-l-6,.n-p-l-lg { padding-left: ${variables["spacing.6"]}; }
    .n-p-r-6,.n-p-r-lg { padding-right: ${variables["spacing.6"]}; }
    .n-p-t-6,.n-p-t-lg { padding-top: ${variables["spacing.6"]}; }
    .n-p-b-6,.n-p-b-lg { padding-bottom: ${variables["spacing.6"]}; }
    .n-p-l-7 { padding-left: ${variables["spacing.7"]}; }
    .n-p-r-7 { padding-right: ${variables["spacing.7"]}; }
    .n-p-t-7 { padding-top: ${variables["spacing.7"]}; }
    .n-p-b-7 { padding-bottom: ${variables["spacing.7"]}; }
    .n-p-l-8 { padding-left: ${variables["spacing.8"]}; }
    .n-p-r-8 { padding-right: ${variables["spacing.8"]}; }
    .n-p-t-8 { padding-top: ${variables["spacing.8"]}; }
    .n-p-b-8 { padding-bottom: ${variables["spacing.8"]}; }
    .n-p-l-9 { padding-left: ${variables["spacing.9"]}; }
    .n-p-r-9 { padding-right: ${variables["spacing.9"]}; }
    .n-p-t-9 { padding-top: ${variables["spacing.9"]}; }
    .n-p-b-9 { padding-bottom: ${variables["spacing.9"]}; }
    .n-p-l-10 { padding-left: ${variables["spacing.10"]}; }
    .n-p-r-10 { padding-right: ${variables["spacing.10"]}; }
    .n-p-t-10 { padding-top: ${variables["spacing.10"]}; }
    .n-p-b-10 { padding-bottom: ${variables["spacing.10"]}; }
    .n-p-x-0 { padding-left: 0; padding-right: 0; }
    .n-p-y-0 { padding-top: 0; padding-bottom: 0; }
    .n-p-l-0 { padding-left: 0; }
    .n-p-r-0 { padding-right: 0; }
    .n-p-t-0 { padding-top: 0; }
    .n-p-b-0 { padding-bottom: 0; }
  `;
};

export default getSpacingStyles;
