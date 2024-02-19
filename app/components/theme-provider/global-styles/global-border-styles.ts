import { createGlobalStyle } from "styled-components";
import { TVariables } from "../theme/types";

export const GlobalCommonBorderStyles = createGlobalStyle<{
  variables: TVariables;
}>`
  .n-border-radius { border-radius: ${(props) =>
    props.variables["border.radius"]}; }
  .n-border-radius-tl { border-top-left-radius: ${(props) =>
    props.variables["border.radius"]}; }
  .n-border-radius-tr { border-top-right-radius: ${(props) =>
    props.variables["border.radius"]}; }
  .n-border-radius-bl { border-bottom-left-radius: ${(props) =>
    props.variables["border.radius"]}; }
  .n-border-radius-br { border-bottom-right-radius: ${(props) =>
    props.variables["border.radius"]}; }
  .n-border-radius-sm { border-radius: ${(props) =>
    props.variables["border.radius.small"]}; }
  .n-border-radius-tl-sm { border-top-left-radius: ${(props) =>
    props.variables["border.radius.small"]}; }
  .n-border-radius-tr-sm { border-top-right-radius: ${(props) =>
    props.variables["border.radius.small"]}; }
  .n-border-radius-bl-sm { border-bottom-left-radius: ${(props) =>
    props.variables["border.radius.small"]}; }
  .n-border-radius-br-sm { border-bottom-right-radius: ${(props) =>
    props.variables["border.radius.small"]}; }
  .n-border-radius-lg { border-radius: ${(props) =>
    props.variables["border.radius.large"]}; }
  .n-border-radius-tl-lg { border-top-left-radius: ${(props) =>
    props.variables["border.radius.large"]}; }
  .n-border-radius-tr-lg { border-top-right-radius: ${(props) =>
    props.variables["border.radius.large"]}; }
  .n-border-radius-bl-lg { border-bottom-left-radius: ${(props) =>
    props.variables["border.radius.large"]}; }
  .n-border-radius-br-lg { border-bottom-right-radius: ${(props) =>
    props.variables["border.radius.large"]}; }
  .n-border-0 { border: none; }
  .n-border-l-0 { border-left: none; }
  .n-border-r-0 { border-right: none; }
  .n-border-t-0 { border-top: none; }
  .n-border-b-0 { border-bottom: none; }
`;

export const GlobalColorBorderStyles = createGlobalStyle<{
  variables: TVariables;
}>`
  .n-border { border: solid 1px ${(props) => props.variables["border.color"]}; }
  .n-border-l { border-left: solid 1px ${(props) =>
    props.variables["border.color"]}; }
  .n-border-r { border-right: solid 1px ${(props) =>
    props.variables["border.color"]}; }
  .n-border-t { border-top: solid 1px ${(props) =>
    props.variables["border.color"]}; }
  .n-border-b { border-bottom: solid 1px ${(props) =>
    props.variables["border.color"]}; }
  .n-border-secondary { border-color: ${(props) =>
    props.variables["border.color.secondary"]}; }
  .n-border-gray-1 { border-color: ${(props) =>
    props.variables["color.gray.1"]}; }
  .n-border-gray-2 { border-color: ${(props) =>
    props.variables["color.gray.2"]}; }
  .n-border-gray-3 { border-color: ${(props) =>
    props.variables["color.gray.3"]}; }
  .n-border-gray-4 { border-color: ${(props) =>
    props.variables["color.gray.4"]}; }
  .n-border-gray-5 { border-color: ${(props) =>
    props.variables["color.gray.5"]}; }
  .n-border-gray-6 { border-color: ${(props) =>
    props.variables["color.gray.6"]}; }
  .n-border-gray-7 { border-color: ${(props) =>
    props.variables["color.gray.7"]}; }
  .n-border-gray-8 { border-color: ${(props) =>
    props.variables["color.gray.8"]}; }
  .n-border-gray-9 { border-color: ${(props) =>
    props.variables["color.gray.9"]}; }
  .n-border-gray-10 { border-color: ${(props) =>
    props.variables["color.gray.10"]}; }
  .n-border-blue-1 { border-color: ${(props) =>
    props.variables["color.blue.1"]}; }
  .n-border-blue-2 { border-color: ${(props) =>
    props.variables["color.blue.2"]}; }
  .n-border-blue-3 { border-color: ${(props) =>
    props.variables["color.blue.3"]}; }
  .n-border-blue-4 { border-color: ${(props) =>
    props.variables["color.blue.4"]}; }
  .n-border-blue-5 { border-color: ${(props) =>
    props.variables["color.blue.5"]}; }
  .n-border-blue,.n-border-blue-6 { border-color: ${(props) =>
    props.variables["color.blue.6"]}; }
  .n-border-blue-7 { border-color: ${(props) =>
    props.variables["color.blue.7"]}; }
  .n-border-blue-8 { border-color: ${(props) =>
    props.variables["color.blue.8"]}; }
  .n-border-blue-9 { border-color: ${(props) =>
    props.variables["color.blue.9"]}; }
  .n-border-blue-10 { border-color: ${(props) =>
    props.variables["color.blue.10"]}; }
  .n-border-green-1 { border-color: ${(props) =>
    props.variables["color.green.1"]}; }
  .n-border-green-2 { border-color: ${(props) =>
    props.variables["color.green.2"]}; }
  .n-border-green-3 { border-color: ${(props) =>
    props.variables["color.green.3"]}; }
  .n-border-green-4 { border-color: ${(props) =>
    props.variables["color.green.4"]}; }
  .n-border-green-5 { border-color: ${(props) =>
    props.variables["color.green.5"]}; }
  .n-border-green,.n-border-green-6 { border-color: ${(props) =>
    props.variables["color.green.6"]}; }
  .n-border-green-7 { border-color: ${(props) =>
    props.variables["color.green.7"]}; }
  .n-border-green-8 { border-color: ${(props) =>
    props.variables["color.green.8"]}; }
  .n-border-green-9 { border-color: ${(props) =>
    props.variables["color.green.9"]}; }
  .n-border-green-10 { border-color: ${(props) =>
    props.variables["color.green.10"]}; }
  .n-border-cyan-1 { border-color: ${(props) =>
    props.variables["color.cyan.1"]}; }
  .n-border-cyan-2 { border-color: ${(props) =>
    props.variables["color.cyan.2"]}; }
  .n-border-cyan-3 { border-color: ${(props) =>
    props.variables["color.cyan.3"]}; }
  .n-border-cyan-4 { border-color: ${(props) =>
    props.variables["color.cyan.4"]}; }
  .n-border-cyan-5 { border-color: ${(props) =>
    props.variables["color.cyan.5"]}; }
  .n-border-cyan,.n-border-cyan-6 { border-color: ${(props) =>
    props.variables["color.cyan.6"]}; }
  .n-border-cyan-7 { border-color: ${(props) =>
    props.variables["color.cyan.7"]}; }
  .n-border-cyan-8 { border-color: ${(props) =>
    props.variables["color.cyan.8"]}; }
  .n-border-cyan-9 { border-color: ${(props) =>
    props.variables["color.cyan.9"]}; }
  .n-border-cyan-10 { border-color: ${(props) =>
    props.variables["color.cyan.10"]}; }
  .n-border-yellow-1 { border-color: ${(props) =>
    props.variables["color.yellow.1"]}; }
  .n-border-yellow-2 { border-color: ${(props) =>
    props.variables["color.yellow.2"]}; }
  .n-border-yellow-3 { border-color: ${(props) =>
    props.variables["color.yellow.3"]}; }
  .n-border-yellow-4 { border-color: ${(props) =>
    props.variables["color.yellow.4"]}; }
  .n-border-yellow-5 { border-color: ${(props) =>
    props.variables["color.yellow.5"]}; }
  .n-border-yellow,.n-border-yellow-6 { border-color: ${(props) =>
    props.variables["color.yellow.6"]}; }
  .n-border-yellow-7 { border-color: ${(props) =>
    props.variables["color.yellow.7"]}; }
  .n-border-yellow-8 { border-color: ${(props) =>
    props.variables["color.yellow.8"]}; }
  .n-border-yellow-9 { border-color: ${(props) =>
    props.variables["color.yellow.9"]}; }
  .n-border-yellow-10 { border-color: ${(props) =>
    props.variables["color.yellow.10"]}; }
  .n-border-orange-1 { border-color: ${(props) =>
    props.variables["color.orange.1"]}; }
  .n-border-orange-2 { border-color: ${(props) =>
    props.variables["color.orange.2"]}; }
  .n-border-orange-3 { border-color: ${(props) =>
    props.variables["color.orange.3"]}; }
  .n-border-orange-4 { border-color: ${(props) =>
    props.variables["color.orange.4"]}; }
  .n-border-orange-5 { border-color: ${(props) =>
    props.variables["color.orange.5"]}; }
  .n-border-orange,.n-border-orange-6 { border-color: ${(props) =>
    props.variables["color.orange.6"]}; }
  .n-border-orange-7 { border-color: ${(props) =>
    props.variables["color.orange.7"]}; }
  .n-border-orange-8 { border-color: ${(props) =>
    props.variables["color.orange.8"]}; }
  .n-border-orange-9 { border-color: ${(props) =>
    props.variables["color.orange.9"]}; }
  .n-border-orange-10 { border-color: ${(props) =>
    props.variables["color.orange.10"]}; }
  .n-border-red-1 { border-color: ${(props) =>
    props.variables["color.red.1"]}; }
  .n-border-red-2 { border-color: ${(props) =>
    props.variables["color.red.2"]}; }
  .n-border-red-3 { border-color: ${(props) =>
    props.variables["color.red.3"]}; }
  .n-border-red-4 { border-color: ${(props) =>
    props.variables["color.red.4"]}; }
  .n-border-red-5 { border-color: ${(props) =>
    props.variables["color.red.5"]}; }
  .n-border-red,.n-border-red-6 { border-color: ${(props) =>
    props.variables["color.red.6"]}; }
  .n-border-red-7 { border-color: ${(props) =>
    props.variables["color.red.7"]}; }
  .n-border-red-8 { border-color: ${(props) =>
    props.variables["color.red.8"]}; }
  .n-border-red-9 { border-color: ${(props) =>
    props.variables["color.red.9"]}; }
  .n-border-red-10 { border-color: ${(props) =>
    props.variables["color.red.10"]}; }
  .n-border-purple-1 { border-color: ${(props) =>
    props.variables["color.purple.1"]}; }
  .n-border-purple-2 { border-color: ${(props) =>
    props.variables["color.purple.2"]}; }
  .n-border-purple-3 { border-color: ${(props) =>
    props.variables["color.purple.3"]}; }
  .n-border-purple-4 { border-color: ${(props) =>
    props.variables["color.purple.4"]}; }
  .n-border-purple-5 { border-color: ${(props) =>
    props.variables["color.purple.5"]}; }
  .n-border-purple,.n-border-purple-6 { border-color: ${(props) =>
    props.variables["color.purple.6"]}; }
  .n-border-purple-7 { border-color: ${(props) =>
    props.variables["color.purple.7"]}; }
  .n-border-purple-8 { border-color: ${(props) =>
    props.variables["color.purple.8"]}; }
  .n-border-purple-9 { border-color: ${(props) =>
    props.variables["color.purple.9"]}; }
  .n-border-purple-10 { border-color: ${(props) =>
    props.variables["color.purple.10"]}; }
  .n-border-pink-1 { border-color: ${(props) =>
    props.variables["color.pink.1"]}; }
  .n-border-pink-2 { border-color: ${(props) =>
    props.variables["color.pink.2"]}; }
  .n-border-pink-3 { border-color: ${(props) =>
    props.variables["color.pink.3"]}; }
  .n-border-pink-4 { border-color: ${(props) =>
    props.variables["color.pink.4"]}; }
  .n-border-pink-5 { border-color: ${(props) =>
    props.variables["color.pink.5"]}; }
  .n-border-pink,.n-border-pink-6 { border-color: ${(props) =>
    props.variables["color.pink.6"]}; }
  .n-border-pink-7 { border-color: ${(props) =>
    props.variables["color.pink.7"]}; }
  .n-border-pink-8 { border-color: ${(props) =>
    props.variables["color.pink.8"]}; }
  .n-border-pink-9 { border-color: ${(props) =>
    props.variables["color.pink.9"]}; }
  .n-border-pink-10 { border-color: ${(props) =>
    props.variables["color.pink.10"]}; }
  .n-border-primary-1 { border-color: ${(props) =>
    props.variables["color.primary.1"]}; }
  .n-border-primary-2 { border-color: ${(props) =>
    props.variables["color.primary.2"]}; }
  .n-border-primary-3 { border-color: ${(props) =>
    props.variables["color.primary.3"]}; }
  .n-border-primary-4 { border-color: ${(props) =>
    props.variables["color.primary.4"]}; }
  .n-border-primary-5 { border-color: ${(props) =>
    props.variables["color.primary.5"]}; }
  .n-border-primary-6 { border-color: ${(props) =>
    props.variables["color.primary.6"]}; }
  .n-border-primary-7 { border-color: ${(props) =>
    props.variables["color.primary.7"]}; }
  .n-border-primary-8 { border-color: ${(props) =>
    props.variables["color.primary.8"]}; }
  .n-border-primary-9 { border-color: ${(props) =>
    props.variables["color.primary.9"]}; }
  .n-border-primary-10 { border-color: ${(props) =>
    props.variables["color.primary.10"]}; }
  .n-border-success-1 { border-color: ${(props) =>
    props.variables["color.success.1"]}; }
  .n-border-success-2 { border-color: ${(props) =>
    props.variables["color.success.2"]}; }
  .n-border-success-3 { border-color: ${(props) =>
    props.variables["color.success.3"]}; }
  .n-border-success-4 { border-color: ${(props) =>
    props.variables["color.success.4"]}; }
  .n-border-success-5 { border-color: ${(props) =>
    props.variables["color.success.5"]}; }
  .n-border-success-6 { border-color: ${(props) =>
    props.variables["color.success.6"]}; }
  .n-border-success-7 { border-color: ${(props) =>
    props.variables["color.success.7"]}; }
  .n-border-success-8 { border-color: ${(props) =>
    props.variables["color.success.8"]}; }
  .n-border-success-9 { border-color: ${(props) =>
    props.variables["color.success.9"]}; }
  .n-border-success-10 { border-color: ${(props) =>
    props.variables["color.success.10"]}; }
  .n-border-info-1 { border-color: ${(props) =>
    props.variables["color.info.1"]}; }
  .n-border-info-2 { border-color: ${(props) =>
    props.variables["color.info.2"]}; }
  .n-border-info-3 { border-color: ${(props) =>
    props.variables["color.info.3"]}; }
  .n-border-info-4 { border-color: ${(props) =>
    props.variables["color.info.4"]}; }
  .n-border-info-5 { border-color: ${(props) =>
    props.variables["color.info.5"]}; }
  .n-border-info-6 { border-color: ${(props) =>
    props.variables["color.info.6"]}; }
  .n-border-info-7 { border-color: ${(props) =>
    props.variables["color.info.7"]}; }
  .n-border-info-8 { border-color: ${(props) =>
    props.variables["color.info.8"]}; }
  .n-border-info-9 { border-color: ${(props) =>
    props.variables["color.info.9"]}; }
  .n-border-info-10 { border-color: ${(props) =>
    props.variables["color.info.10"]}; }
  .n-border-warning-1 { border-color: ${(props) =>
    props.variables["color.warning.1"]}; }
  .n-border-warning-2 { border-color: ${(props) =>
    props.variables["color.warning.2"]}; }
  .n-border-warning-3 { border-color: ${(props) =>
    props.variables["color.warning.3"]}; }
  .n-border-warning-4 { border-color: ${(props) =>
    props.variables["color.warning.4"]}; }
  .n-border-warning-5 { border-color: ${(props) =>
    props.variables["color.warning.5"]}; }
  .n-border-warning-6 { border-color: ${(props) =>
    props.variables["color.warning.6"]}; }
  .n-border-warning-7 { border-color: ${(props) =>
    props.variables["color.warning.7"]}; }
  .n-border-warning-8 { border-color: ${(props) =>
    props.variables["color.warning.8"]}; }
  .n-border-warning-9 { border-color: ${(props) =>
    props.variables["color.warning.9"]}; }
  .n-border-warning-10 { border-color: ${(props) =>
    props.variables["color.warning.10"]}; }
  .n-border-danger-1,.n-border-error-1 { border-color: ${(props) =>
    props.variables["color.error.1"]}; }
  .n-border-danger-2,.n-border-error-2 { border-color: ${(props) =>
    props.variables["color.error.2"]}; }
  .n-border-danger-3,.n-border-error-3 { border-color: ${(props) =>
    props.variables["color.error.3"]}; }
  .n-border-danger-4,.n-border-error-4 { border-color: ${(props) =>
    props.variables["color.error.4"]}; }
  .n-border-danger-5,.n-border-error-5 { border-color: ${(props) =>
    props.variables["color.error.5"]}; }
  .n-border-danger-6,.n-border-error-6 { border-color: ${(props) =>
    props.variables["color.error.6"]}; }
  .n-border-danger-7,.n-border-error-7 { border-color: ${(props) =>
    props.variables["color.error.7"]}; }
  .n-border-danger-8,.n-border-error-8 { border-color: ${(props) =>
    props.variables["color.error.8"]}; }
  .n-border-danger-9,.n-border-error-9 { border-color: ${(props) =>
    props.variables["color.error.9"]}; }
  .n-border-danger-10,.n-border-error-10 { border-color: ${(props) =>
    props.variables["color.error.10"]}; }
  .n-border-primary { border-color: ${(props) =>
    props.variables["color.primary"]}; }
  .n-border-success { border-color: ${(props) =>
    props.variables["color.success"]}; }
  .n-border-info { border-color: ${(props) => props.variables["color.info"]}; }
  .n-border-warning { border-color: ${(props) =>
    props.variables["color.warning"]}; }
  .n-border-danger,.n-border-error { border-color: ${(props) =>
    props.variables["color.error"]}; }
`;
