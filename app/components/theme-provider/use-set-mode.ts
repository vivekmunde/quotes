import { useCallback } from "react";
import { TMode } from "~/theme/types";

const useSetMode = (): ((mode: TMode) => void) => {
  return useCallback((mode) => {
    if (document) {
      const classNames = document.documentElement.className
        .split(" ")
        .filter((it) => it.trim() !== "" && !it.match(/dark/gi));

      if (mode === "dark") {
        classNames.push("dark");
      }

      document.documentElement.className = classNames.join(" ");
    }
  }, []);
};

export default useSetMode;
