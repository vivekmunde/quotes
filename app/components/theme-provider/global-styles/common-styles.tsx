import React from "react";
import { TVariables } from "../theme/types";
import { GlobalCommonBackgroundStyles } from "./global-background-styles";
import { GlobalCommonBorderStyles } from "./global-border-styles";
import GlobalFlexStyles from "./global-flex-styles";
import { GlobalCommonRootStyles } from "./global-root-styles";
import GlobalSpacingStyles from "./global-spacing-styles";
import { GlobalCommonTypographyStyles } from "./global-typography-styles";

const CommonGlobalStyles: React.FC<{ variables: TVariables }> = ({
  variables,
}) => {
  return (
    <React.Fragment>
      <GlobalCommonRootStyles variables={variables} />
      <GlobalCommonBackgroundStyles variables={variables} />
      <GlobalCommonBorderStyles variables={variables} />
      <GlobalFlexStyles variables={variables} />
      <GlobalSpacingStyles variables={variables} />
      <GlobalCommonTypographyStyles variables={variables} />
    </React.Fragment>
  );
};

export default CommonGlobalStyles;
