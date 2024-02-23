import React, { useEffect } from "react";
import useSetMode from "./use-set-mode";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const setMode = useSetMode();

  useEffect(() => {
    const darkThemeMq = window?.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq?.matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeProvider;
