import { createGlobalStyle } from "styled-components";
import { TVariables } from "../theme/types";

export const GlobalCommonBackgroundStyles = createGlobalStyle<{
  variables: TVariables;
}>`
  .n-bg-transparent { background-color: transparent; }
`;

export const GlobalColorBackgroundStyles = createGlobalStyle<{
  variables: TVariables;
}>`
  .n-bg-transparent { background-color: transparent; }
  .n-bg-body { background-color: ${(props) =>
    props.variables["color.background.body"]}; }
  .n-bg-component { background-color: ${(props) =>
    props.variables["color.background.component"]}; }
  .n-bg-opaque { background-color: ${(props) =>
    props.variables["color.background.body"]}; }
  .n-bg-gray-1 { background-color: ${(props) =>
    props.variables["color.gray.1"]}; }
  .n-bg-gray-2 { background-color: ${(props) =>
    props.variables["color.gray.2"]}; }
  .n-bg-gray-3 { background-color: ${(props) =>
    props.variables["color.gray.3"]}; }
  .n-bg-gray-4 { background-color: ${(props) =>
    props.variables["color.gray.4"]}; }
  .n-bg-gray-5 { background-color: ${(props) =>
    props.variables["color.gray.5"]}; }
  .n-bg-gray-6 { background-color: ${(props) =>
    props.variables["color.gray.6"]}; }
  .n-bg-gray-7 { background-color: ${(props) =>
    props.variables["color.gray.7"]}; }
  .n-bg-gray-8 { background-color: ${(props) =>
    props.variables["color.gray.8"]}; }
  .n-bg-gray-9 { background-color: ${(props) =>
    props.variables["color.gray.9"]}; }
  .n-bg-gray-10 { background-color: ${(props) =>
    props.variables["color.gray.10"]}; }
  .n-bg-blue-1 { background-color: ${(props) =>
    props.variables["color.blue.1"]}; }
  .n-bg-blue-2 { background-color: ${(props) =>
    props.variables["color.blue.2"]}; }
  .n-bg-blue-3 { background-color: ${(props) =>
    props.variables["color.blue.3"]}; }
  .n-bg-blue-4 { background-color: ${(props) =>
    props.variables["color.blue.4"]}; }
  .n-bg-blue-5 { background-color: ${(props) =>
    props.variables["color.blue.5"]}; }
  .n-bg-blue,.n-bg-blue-6 { background-color: ${(props) =>
    props.variables["color.blue.6"]}; }
  .n-bg-blue-7 { background-color: ${(props) =>
    props.variables["color.blue.7"]}; }
  .n-bg-blue-8 { background-color: ${(props) =>
    props.variables["color.blue.8"]}; }
  .n-bg-blue-9 { background-color: ${(props) =>
    props.variables["color.blue.9"]}; }
  .n-bg-blue-10 { background-color: ${(props) =>
    props.variables["color.blue.10"]}; }
  .n-bg-green-1 { background-color: ${(props) =>
    props.variables["color.green.1"]}; }
  .n-bg-green-2 { background-color: ${(props) =>
    props.variables["color.green.2"]}; }
  .n-bg-green-3 { background-color: ${(props) =>
    props.variables["color.green.3"]}; }
  .n-bg-green-4 { background-color: ${(props) =>
    props.variables["color.green.4"]}; }
  .n-bg-green-5 { background-color: ${(props) =>
    props.variables["color.green.5"]}; }
  .n-bg-green,.n-bg-green-6 { background-color: ${(props) =>
    props.variables["color.green.6"]}; }
  .n-bg-green-7 { background-color: ${(props) =>
    props.variables["color.green.7"]}; }
  .n-bg-green-8 { background-color: ${(props) =>
    props.variables["color.green.8"]}; }
  .n-bg-green-9 { background-color: ${(props) =>
    props.variables["color.green.9"]}; }
  .n-bg-green-10 { background-color: ${(props) =>
    props.variables["color.green.10"]}; }
  .n-bg-cyan-1 { background-color: ${(props) =>
    props.variables["color.cyan.1"]}; }
  .n-bg-cyan-2 { background-color: ${(props) =>
    props.variables["color.cyan.2"]}; }
  .n-bg-cyan-3 { background-color: ${(props) =>
    props.variables["color.cyan.3"]}; }
  .n-bg-cyan-4 { background-color: ${(props) =>
    props.variables["color.cyan.4"]}; }
  .n-bg-cyan-5 { background-color: ${(props) =>
    props.variables["color.cyan.5"]}; }
  .n-bg-cyan,.n-bg-cyan-6 { background-color: ${(props) =>
    props.variables["color.cyan.6"]}; }
  .n-bg-cyan-7 { background-color: ${(props) =>
    props.variables["color.cyan.7"]}; }
  .n-bg-cyan-8 { background-color: ${(props) =>
    props.variables["color.cyan.8"]}; }
  .n-bg-cyan-9 { background-color: ${(props) =>
    props.variables["color.cyan.9"]}; }
  .n-bg-cyan-10 { background-color: ${(props) =>
    props.variables["color.cyan.10"]}; }
  .n-bg-yellow-1 { background-color: ${(props) =>
    props.variables["color.yellow.1"]}; }
  .n-bg-yellow-2 { background-color: ${(props) =>
    props.variables["color.yellow.2"]}; }
  .n-bg-yellow-3 { background-color: ${(props) =>
    props.variables["color.yellow.3"]}; }
  .n-bg-yellow-4 { background-color: ${(props) =>
    props.variables["color.yellow.4"]}; }
  .n-bg-yellow-5 { background-color: ${(props) =>
    props.variables["color.yellow.5"]}; }
  .n-bg-yellow,.n-bg-yellow-6 { background-color: ${(props) =>
    props.variables["color.yellow.6"]}; }
  .n-bg-yellow-7 { background-color: ${(props) =>
    props.variables["color.yellow.7"]}; }
  .n-bg-yellow-8 { background-color: ${(props) =>
    props.variables["color.yellow.8"]}; }
  .n-bg-yellow-9 { background-color: ${(props) =>
    props.variables["color.yellow.9"]}; }
  .n-bg-yellow-10 { background-color: ${(props) =>
    props.variables["color.yellow.10"]}; }
  .n-bg-orange-1 { background-color: ${(props) =>
    props.variables["color.orange.1"]}; }
  .n-bg-orange-2 { background-color: ${(props) =>
    props.variables["color.orange.2"]}; }
  .n-bg-orange-3 { background-color: ${(props) =>
    props.variables["color.orange.3"]}; }
  .n-bg-orange-4 { background-color: ${(props) =>
    props.variables["color.orange.4"]}; }
  .n-bg-orange-5 { background-color: ${(props) =>
    props.variables["color.orange.5"]}; }
  .n-bg-orange,.n-bg-orange-6 { background-color: ${(props) =>
    props.variables["color.orange.6"]}; }
  .n-bg-orange-7 { background-color: ${(props) =>
    props.variables["color.orange.7"]}; }
  .n-bg-orange-8 { background-color: ${(props) =>
    props.variables["color.orange.8"]}; }
  .n-bg-orange-9 { background-color: ${(props) =>
    props.variables["color.orange.9"]}; }
  .n-bg-orange-10 { background-color: ${(props) =>
    props.variables["color.orange.10"]}; }
  .n-bg-red-1 { background-color: ${(props) =>
    props.variables["color.red.1"]}; }
  .n-bg-red-2 { background-color: ${(props) =>
    props.variables["color.red.2"]}; }
  .n-bg-red-3 { background-color: ${(props) =>
    props.variables["color.red.3"]}; }
  .n-bg-red-4 { background-color: ${(props) =>
    props.variables["color.red.4"]}; }
  .n-bg-red-5 { background-color: ${(props) =>
    props.variables["color.red.5"]}; }
  .n-bg-red,.n-bg-red-6 { background-color: ${(props) =>
    props.variables["color.red.6"]}; }
  .n-bg-red-7 { background-color: ${(props) =>
    props.variables["color.red.7"]}; }
  .n-bg-red-8 { background-color: ${(props) =>
    props.variables["color.red.8"]}; }
  .n-bg-red-9 { background-color: ${(props) =>
    props.variables["color.red.9"]}; }
  .n-bg-red-10 { background-color: ${(props) =>
    props.variables["color.red.10"]}; }
  .n-bg-purple-1 { background-color: ${(props) =>
    props.variables["color.purple.1"]}; }
  .n-bg-purple-2 { background-color: ${(props) =>
    props.variables["color.purple.2"]}; }
  .n-bg-purple-3 { background-color: ${(props) =>
    props.variables["color.purple.3"]}; }
  .n-bg-purple-4 { background-color: ${(props) =>
    props.variables["color.purple.4"]}; }
  .n-bg-purple-5 { background-color: ${(props) =>
    props.variables["color.purple.5"]}; }
  .n-bg-purple,.n-bg-purple-6 { background-color: ${(props) =>
    props.variables["color.purple.6"]}; }
  .n-bg-purple-7 { background-color: ${(props) =>
    props.variables["color.purple.7"]}; }
  .n-bg-purple-8 { background-color: ${(props) =>
    props.variables["color.purple.8"]}; }
  .n-bg-purple-9 { background-color: ${(props) =>
    props.variables["color.purple.9"]}; }
  .n-bg-purple-10 { background-color: ${(props) =>
    props.variables["color.purple.10"]}; }
  .n-bg-pink-1 { background-color: ${(props) =>
    props.variables["color.pink.1"]}; }
  .n-bg-pink-2 { background-color: ${(props) =>
    props.variables["color.pink.2"]}; }
  .n-bg-pink-3 { background-color: ${(props) =>
    props.variables["color.pink.3"]}; }
  .n-bg-pink-4 { background-color: ${(props) =>
    props.variables["color.pink.4"]}; }
  .n-bg-pink-5 { background-color: ${(props) =>
    props.variables["color.pink.5"]}; }
  .n-bg-pink,.n-bg-pink-6 { background-color: ${(props) =>
    props.variables["color.pink.6"]}; }
  .n-bg-pink-7 { background-color: ${(props) =>
    props.variables["color.pink.7"]}; }
  .n-bg-pink-8 { background-color: ${(props) =>
    props.variables["color.pink.8"]}; }
  .n-bg-pink-9 { background-color: ${(props) =>
    props.variables["color.pink.9"]}; }
  .n-bg-pink-10 { background-color: ${(props) =>
    props.variables["color.pink.10"]}; }
  .n-bg-primary-1 { background-color: ${(props) =>
    props.variables["color.primary.1"]}; }
  .n-bg-primary-2 { background-color: ${(props) =>
    props.variables["color.primary.2"]}; }
  .n-bg-primary-3 { background-color: ${(props) =>
    props.variables["color.primary.3"]}; }
  .n-bg-primary-4 { background-color: ${(props) =>
    props.variables["color.primary.4"]}; }
  .n-bg-primary-5 { background-color: ${(props) =>
    props.variables["color.primary.5"]}; }
  .n-bg-primary-6 { background-color: ${(props) =>
    props.variables["color.primary.6"]}; }
  .n-bg-primary-7 { background-color: ${(props) =>
    props.variables["color.primary.7"]}; }
  .n-bg-primary-8 { background-color: ${(props) =>
    props.variables["color.primary.8"]}; }
  .n-bg-primary-9 { background-color: ${(props) =>
    props.variables["color.primary.9"]}; }
  .n-bg-primary-10 { background-color: ${(props) =>
    props.variables["color.primary.10"]}; }
  .n-bg-success-1 { background-color: ${(props) =>
    props.variables["color.success.1"]}; }
  .n-bg-success-2 { background-color: ${(props) =>
    props.variables["color.success.2"]}; }
  .n-bg-success-3 { background-color: ${(props) =>
    props.variables["color.success.3"]}; }
  .n-bg-success-4 { background-color: ${(props) =>
    props.variables["color.success.4"]}; }
  .n-bg-success-5 { background-color: ${(props) =>
    props.variables["color.success.5"]}; }
  .n-bg-success-6 { background-color: ${(props) =>
    props.variables["color.success.6"]}; }
  .n-bg-success-7 { background-color: ${(props) =>
    props.variables["color.success.7"]}; }
  .n-bg-success-8 { background-color: ${(props) =>
    props.variables["color.success.8"]}; }
  .n-bg-success-9 { background-color: ${(props) =>
    props.variables["color.success.9"]}; }
  .n-bg-success-10 { background-color: ${(props) =>
    props.variables["color.success.10"]}; }
  .n-bg-info-1 { background-color: ${(props) =>
    props.variables["color.info.1"]}; }
  .n-bg-info-2 { background-color: ${(props) =>
    props.variables["color.info.2"]}; }
  .n-bg-info-3 { background-color: ${(props) =>
    props.variables["color.info.3"]}; }
  .n-bg-info-4 { background-color: ${(props) =>
    props.variables["color.info.4"]}; }
  .n-bg-info-5 { background-color: ${(props) =>
    props.variables["color.info.5"]}; }
  .n-bg-info-6 { background-color: ${(props) =>
    props.variables["color.info.6"]}; }
  .n-bg-info-7 { background-color: ${(props) =>
    props.variables["color.info.7"]}; }
  .n-bg-info-8 { background-color: ${(props) =>
    props.variables["color.info.8"]}; }
  .n-bg-info-9 { background-color: ${(props) =>
    props.variables["color.info.9"]}; }
  .n-bg-info-10 { background-color: ${(props) =>
    props.variables["color.info.10"]}; }
  .n-bg-warning-1 { background-color: ${(props) =>
    props.variables["color.warning.1"]}; }
  .n-bg-warning-2 { background-color: ${(props) =>
    props.variables["color.warning.2"]}; }
  .n-bg-warning-3 { background-color: ${(props) =>
    props.variables["color.warning.3"]}; }
  .n-bg-warning-4 { background-color: ${(props) =>
    props.variables["color.warning.4"]}; }
  .n-bg-warning-5 { background-color: ${(props) =>
    props.variables["color.warning.5"]}; }
  .n-bg-warning-6 { background-color: ${(props) =>
    props.variables["color.warning.6"]}; }
  .n-bg-warning-7 { background-color: ${(props) =>
    props.variables["color.warning.7"]}; }
  .n-bg-warning-8 { background-color: ${(props) =>
    props.variables["color.warning.8"]}; }
  .n-bg-warning-9 { background-color: ${(props) =>
    props.variables["color.warning.9"]}; }
  .n-bg-warning-10 { background-color: ${(props) =>
    props.variables["color.warning.10"]}; }
  .n-bg-danger-1,.n-bg-error-1 { background-color: ${(props) =>
    props.variables["color.error.1"]}; }
  .n-bg-danger-2,.n-bg-error-2 { background-color: ${(props) =>
    props.variables["color.error.2"]}; }
  .n-bg-danger-3,.n-bg-error-3 { background-color: ${(props) =>
    props.variables["color.error.3"]}; }
  .n-bg-danger-4,.n-bg-error-4 { background-color: ${(props) =>
    props.variables["color.error.4"]}; }
  .n-bg-danger-5,.n-bg-error-5 { background-color: ${(props) =>
    props.variables["color.error.5"]}; }
  .n-bg-danger-6,.n-bg-error-6 { background-color: ${(props) =>
    props.variables["color.error.6"]}; }
  .n-bg-danger-7,.n-bg-error-7 { background-color: ${(props) =>
    props.variables["color.error.7"]}; }
  .n-bg-danger-8,.n-bg-error-8 { background-color: ${(props) =>
    props.variables["color.error.8"]}; }
  .n-bg-danger-9,.n-bg-error-9 { background-color: ${(props) =>
    props.variables["color.error.9"]}; }
  .n-bg-danger-10,.n-bg-error-10 { background-color: ${(props) =>
    props.variables["color.error.10"]}; }
  .n-bg-primary { background-color: ${(props) =>
    props.variables["color.primary"]}; }
  .n-bg-success { background-color: ${(props) =>
    props.variables["color.success"]}; }
  .n-bg-info { background-color: ${(props) => props.variables["color.info"]}; }
  .n-bg-warning { background-color: ${(props) =>
    props.variables["color.warning"]}; }
  .n-bg-danger,.n-bg-error { background-color: ${(props) =>
    props.variables["color.error"]}; }
  .n-bg-white { background-color: ${(props) =>
    props.variables["color.white"]}; }
`;
