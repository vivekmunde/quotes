import React from "react";
import { TVariables } from "../../theme/types";
import GlobalBackgroundStyles from "./global-background-styles";
import GlobalBorderStyles from "./global-border-styles";
import GlobalColorStyles from "./global-color-styles";
import GlobalRootStyles from "./global-root-styles";

const GlobalStyles: React.FC<{ variables: TVariables }> = ({ variables }) => {
  return (
    <React.Fragment>
      <GlobalRootStyles variables={variables} />
      <GlobalBackgroundStyles variables={variables} />
      <GlobalBorderStyles variables={variables} />
      <GlobalColorStyles variables={variables} />
    </React.Fragment>
  );
};

export default GlobalStyles;
