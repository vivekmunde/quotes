import React from "react";
import { TVariables } from "../theme/types";
import { GlobalColorBackgroundStyles } from "./global-background-styles";
import { GlobalColorBorderStyles } from "./global-border-styles";
import GlobalColorStyles from "./global-color-styles";
import { GlobalColorRootStyles } from "./global-root-styles";

const GlobalStyles: React.FC<{ variables: TVariables }> = ({ variables }) => {
  return (
    <React.Fragment>
      <GlobalColorRootStyles variables={variables} />
      <GlobalColorBackgroundStyles variables={variables} />
      <GlobalColorBorderStyles variables={variables} />
      <GlobalColorStyles variables={variables} />
    </React.Fragment>
  );
};

export default GlobalStyles;
