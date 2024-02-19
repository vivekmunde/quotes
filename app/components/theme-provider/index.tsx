import { ConfigProvider } from "antd";
import React, { useState } from "react";
import GlobalColorStyles from "./global-styles/color";
import getAntDTheme from "./theme/get-antd-theme";
import getVariables from "./theme/get-variables";
import { TMode } from "./theme/types";
import dark from "./theme/variables/dark";
import light from "./theme/variables/light";
import ToggleModeContext from "./toggle-mode-context";

const ThemeProvider: React.FC<{
  children: React.ReactNode;
  mode?: TMode;
}> = ({ children, mode }) => {
  const [currentMode, setCurrentMode] = useState<TMode>(mode ?? "light");
  const variables = getVariables({
    mode: currentMode,
    variables: currentMode === "dark" ? dark : light,
  });

  const onToggleMode = () => {
    setCurrentMode(currentMode === "dark" ? "light" : "dark");
  };

  return (
    <ToggleModeContext.Provider
      value={{ mode: currentMode, onToggle: onToggleMode }}
    >
      <ConfigProvider theme={getAntDTheme(currentMode)}>
        <GlobalColorStyles variables={variables} />
        {children}
      </ConfigProvider>
    </ToggleModeContext.Provider>
  );
};

export default ThemeProvider;
