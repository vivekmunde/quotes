import { createGlobalStyle } from "styled-components";
import { TVariables } from "../../theme/types";

const GlobalColorStyles = createGlobalStyle<{ variables: TVariables }>`
  .n-color-default { color: ${(props) => props.variables["font.color"]}; }
  .n-color-secondary { color: ${(props) =>
    props.variables["font.color.secondary"]}; }
  .n-gray-1 { color: ${(props) => props.variables["color.gray.1"]}; }
  .n-gray-2 { color: ${(props) => props.variables["color.gray.2"]}; }
  .n-gray-3 { color: ${(props) => props.variables["color.gray.3"]}; }
  .n-gray-4 { color: ${(props) => props.variables["color.gray.4"]}; }
  .n-gray-5 { color: ${(props) => props.variables["color.gray.5"]}; }
  .n-gray-6 { color: ${(props) => props.variables["color.gray.6"]}; }
  .n-gray-7 { color: ${(props) => props.variables["color.gray.7"]}; }
  .n-gray-8 { color: ${(props) => props.variables["color.gray.8"]}; }
  .n-gray-9 { color: ${(props) => props.variables["color.gray.9"]}; }
  .n-gray-10 { color: ${(props) => props.variables["color.gray.10"]}; }
  .n-blue-1 { color: ${(props) => props.variables["color.blue.1"]}; }
  .n-blue-2 { color: ${(props) => props.variables["color.blue.2"]}; }
  .n-blue-3 { color: ${(props) => props.variables["color.blue.3"]}; }
  .n-blue-4 { color: ${(props) => props.variables["color.blue.4"]}; }
  .n-blue-5 { color: ${(props) => props.variables["color.blue.5"]}; }
  .n-blue,.n-blue-6 { color: ${(props) => props.variables["color.blue.6"]}; }
  .n-blue-7 { color: ${(props) => props.variables["color.blue.7"]}; }
  .n-blue-8 { color: ${(props) => props.variables["color.blue.8"]}; }
  .n-blue-9 { color: ${(props) => props.variables["color.blue.9"]}; }
  .n-blue-10 { color: ${(props) => props.variables["color.blue.10"]}; }
  .n-green-1 { color: ${(props) => props.variables["color.green.1"]}; }
  .n-green-2 { color: ${(props) => props.variables["color.green.2"]}; }
  .n-green-3 { color: ${(props) => props.variables["color.green.3"]}; }
  .n-green-4 { color: ${(props) => props.variables["color.green.4"]}; }
  .n-green-5 { color: ${(props) => props.variables["color.green.5"]}; }
  .n-green,.n-green-6 { color: ${(props) => props.variables["color.green.6"]}; }
  .n-green-7 { color: ${(props) => props.variables["color.green.7"]}; }
  .n-green-8 { color: ${(props) => props.variables["color.green.8"]}; }
  .n-green-9 { color: ${(props) => props.variables["color.green.9"]}; }
  .n-green-10 { color: ${(props) => props.variables["color.green.10"]}; }
  .n-cyan-1 { color: ${(props) => props.variables["color.cyan.1"]}; }
  .n-cyan-2 { color: ${(props) => props.variables["color.cyan.2"]}; }
  .n-cyan-3 { color: ${(props) => props.variables["color.cyan.3"]}; }
  .n-cyan-4 { color: ${(props) => props.variables["color.cyan.4"]}; }
  .n-cyan-5 { color: ${(props) => props.variables["color.cyan.5"]}; }
  .n-cyan,.n-cyan-6 { color: ${(props) => props.variables["color.cyan.6"]}; }
  .n-cyan-7 { color: ${(props) => props.variables["color.cyan.7"]}; }
  .n-cyan-8 { color: ${(props) => props.variables["color.cyan.8"]}; }
  .n-cyan-9 { color: ${(props) => props.variables["color.cyan.9"]}; }
  .n-cyan-10 { color: ${(props) => props.variables["color.cyan.10"]}; }
  .n-yellow-1 { color: ${(props) => props.variables["color.yellow.1"]}; }
  .n-yellow-2 { color: ${(props) => props.variables["color.yellow.2"]}; }
  .n-yellow-3 { color: ${(props) => props.variables["color.yellow.3"]}; }
  .n-yellow-4 { color: ${(props) => props.variables["color.yellow.4"]}; }
  .n-yellow-5 { color: ${(props) => props.variables["color.yellow.5"]}; }
  .n-yellow,.n-yellow-6 { color: ${(props) =>
    props.variables["color.yellow.6"]}; }
  .n-yellow-7 { color: ${(props) => props.variables["color.yellow.7"]}; }
  .n-yellow-8 { color: ${(props) => props.variables["color.yellow.8"]}; }
  .n-yellow-9 { color: ${(props) => props.variables["color.yellow.9"]}; }
  .n-yellow-10 { color: ${(props) => props.variables["color.yellow.10"]}; }
  .n-orange-1 { color: ${(props) => props.variables["color.orange.1"]}; }
  .n-orange-2 { color: ${(props) => props.variables["color.orange.2"]}; }
  .n-orange-3 { color: ${(props) => props.variables["color.orange.3"]}; }
  .n-orange-4 { color: ${(props) => props.variables["color.orange.4"]}; }
  .n-orange-5 { color: ${(props) => props.variables["color.orange.5"]}; }
  .n-orange,.n-orange-6 { color: ${(props) =>
    props.variables["color.orange.6"]}; }
  .n-orange-7 { color: ${(props) => props.variables["color.orange.7"]}; }
  .n-orange-8 { color: ${(props) => props.variables["color.orange.8"]}; }
  .n-orange-9 { color: ${(props) => props.variables["color.orange.9"]}; }
  .n-orange-10 { color: ${(props) => props.variables["color.orange.10"]}; }
  .n-red-1 { color: ${(props) => props.variables["color.red.1"]}; }
  .n-red-2 { color: ${(props) => props.variables["color.red.2"]}; }
  .n-red-3 { color: ${(props) => props.variables["color.red.3"]}; }
  .n-red-4 { color: ${(props) => props.variables["color.red.4"]}; }
  .n-red-5 { color: ${(props) => props.variables["color.red.5"]}; }
  .n-red,.n-red-6 { color: ${(props) => props.variables["color.red.6"]}; }
  .n-red-7 { color: ${(props) => props.variables["color.red.7"]}; }
  .n-red-8 { color: ${(props) => props.variables["color.red.8"]}; }
  .n-red-9 { color: ${(props) => props.variables["color.red.9"]}; }
  .n-red-10 { color: ${(props) => props.variables["color.red.10"]}; }
  .n-purple-1 { color: ${(props) => props.variables["color.purple.1"]}; }
  .n-purple-2 { color: ${(props) => props.variables["color.purple.2"]}; }
  .n-purple-3 { color: ${(props) => props.variables["color.purple.3"]}; }
  .n-purple-4 { color: ${(props) => props.variables["color.purple.4"]}; }
  .n-purple-5 { color: ${(props) => props.variables["color.purple.5"]}; }
  .n-purple,.n-purple-6 { color: ${(props) =>
    props.variables["color.purple.6"]}; }
  .n-purple-7 { color: ${(props) => props.variables["color.purple.7"]}; }
  .n-purple-8 { color: ${(props) => props.variables["color.purple.8"]}; }
  .n-purple-9 { color: ${(props) => props.variables["color.purple.9"]}; }
  .n-purple-10 { color: ${(props) => props.variables["color.purple.10"]}; }
  .n-pink-1 { color: ${(props) => props.variables["color.pink.1"]}; }
  .n-pink-2 { color: ${(props) => props.variables["color.pink.2"]}; }
  .n-pink-3 { color: ${(props) => props.variables["color.pink.3"]}; }
  .n-pink-4 { color: ${(props) => props.variables["color.pink.4"]}; }
  .n-pink-5 { color: ${(props) => props.variables["color.pink.5"]}; }
  .n-pink,.n-pink-6 { color: ${(props) => props.variables["color.pink.6"]}; }
  .n-pink-7 { color: ${(props) => props.variables["color.pink.7"]}; }
  .n-pink-8 { color: ${(props) => props.variables["color.pink.8"]}; }
  .n-pink-9 { color: ${(props) => props.variables["color.pink.9"]}; }
  .n-pink-10 { color: ${(props) => props.variables["color.pink.10"]}; }
  .n-primary-1 { color: ${(props) => props.variables["color.primary.1"]}; }
  .n-primary-2 { color: ${(props) => props.variables["color.primary.2"]}; }
  .n-primary-3 { color: ${(props) => props.variables["color.primary.3"]}; }
  .n-primary-4 { color: ${(props) => props.variables["color.primary.4"]}; }
  .n-primary-5 { color: ${(props) => props.variables["color.primary.5"]}; }
  .n-primary-6 { color: ${(props) => props.variables["color.primary.6"]}; }
  .n-primary-7 { color: ${(props) => props.variables["color.primary.7"]}; }
  .n-primary-8 { color: ${(props) => props.variables["color.primary.8"]}; }
  .n-primary-9 { color: ${(props) => props.variables["color.primary.9"]}; }
  .n-primary-10 { color: ${(props) => props.variables["color.primary.10"]}; }
  .n-success-1 { color: ${(props) => props.variables["color.success.1"]}; }
  .n-success-2 { color: ${(props) => props.variables["color.success.2"]}; }
  .n-success-3 { color: ${(props) => props.variables["color.success.3"]}; }
  .n-success-4 { color: ${(props) => props.variables["color.success.4"]}; }
  .n-success-5 { color: ${(props) => props.variables["color.success.5"]}; }
  .n-success-6 { color: ${(props) => props.variables["color.success.6"]}; }
  .n-success-7 { color: ${(props) => props.variables["color.success.7"]}; }
  .n-success-8 { color: ${(props) => props.variables["color.success.8"]}; }
  .n-success-9 { color: ${(props) => props.variables["color.success.9"]}; }
  .n-success-10 { color: ${(props) => props.variables["color.success.10"]}; }
  .n-info-1 { color: ${(props) => props.variables["color.info.1"]}; }
  .n-info-2 { color: ${(props) => props.variables["color.info.2"]}; }
  .n-info-3 { color: ${(props) => props.variables["color.info.3"]}; }
  .n-info-4 { color: ${(props) => props.variables["color.info.4"]}; }
  .n-info-5 { color: ${(props) => props.variables["color.info.5"]}; }
  .n-info-6 { color: ${(props) => props.variables["color.info.6"]}; }
  .n-info-7 { color: ${(props) => props.variables["color.info.7"]}; }
  .n-info-8 { color: ${(props) => props.variables["color.info.8"]}; }
  .n-info-9 { color: ${(props) => props.variables["color.info.9"]}; }
  .n-info-10 { color: ${(props) => props.variables["color.info.10"]}; }
  .n-warning-1 { color: ${(props) => props.variables["color.warning.1"]}; }
  .n-warning-2 { color: ${(props) => props.variables["color.warning.2"]}; }
  .n-warning-3 { color: ${(props) => props.variables["color.warning.3"]}; }
  .n-warning-4 { color: ${(props) => props.variables["color.warning.4"]}; }
  .n-warning-5 { color: ${(props) => props.variables["color.warning.5"]}; }
  .n-warning-6 { color: ${(props) => props.variables["color.warning.6"]}; }
  .n-warning-7 { color: ${(props) => props.variables["color.warning.7"]}; }
  .n-warning-8 { color: ${(props) => props.variables["color.warning.8"]}; }
  .n-warning-9 { color: ${(props) => props.variables["color.warning.9"]}; }
  .n-warning-10 { color: ${(props) => props.variables["color.warning.10"]}; }
  .n-danger-1,.n-error-1 { color: ${(props) =>
    props.variables["color.error.1"]}; }
  .n-danger-2,.n-error-2 { color: ${(props) =>
    props.variables["color.error.2"]}; }
  .n-danger-3,.n-error-3 { color: ${(props) =>
    props.variables["color.error.3"]}; }
  .n-danger-4,.n-error-4 { color: ${(props) =>
    props.variables["color.error.4"]}; }
  .n-danger-5,.n-error-5 { color: ${(props) =>
    props.variables["color.error.5"]}; }
  .n-danger-6,.n-error-6 { color: ${(props) =>
    props.variables["color.error.6"]}; }
  .n-danger-7,.n-error-7 { color: ${(props) =>
    props.variables["color.error.7"]}; }
  .n-danger-8,.n-error-8 { color: ${(props) =>
    props.variables["color.error.8"]}; }
  .n-danger-9,.n-error-9 { color: ${(props) =>
    props.variables["color.error.9"]}; }
  .n-danger-10,.n-error-10 { color: ${(props) =>
    props.variables["color.error.10"]}; }
  .n-primary { color: ${(props) => props.variables["color.primary"]}; }
  .n-success { color: ${(props) => props.variables["color.success"]}; }
  .n-info { color: ${(props) => props.variables["color.info"]}; }
  .n-warning { color: ${(props) => props.variables["color.warning"]}; }
  .n-danger,.n-error { color: ${(props) => props.variables["color.error"]}; }
  .n-white { color: ${(props) => props.variables["color.white"]}; }
`;

export default GlobalColorStyles;
