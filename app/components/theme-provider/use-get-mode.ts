import { useCallback } from "react";
import { TMode } from "~/theme/types";

const useGetMode = (): (() => TMode) => {
  return useCallback(() => {
    return document?.documentElement.className.match(/dark/gi)
      ? "dark"
      : "light";
  }, []);
};

export default useGetMode;
