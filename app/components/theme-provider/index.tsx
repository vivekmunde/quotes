import React from "react";
import useDefaultMode from "./use-default-mode";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useDefaultMode();

  return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeProvider;
