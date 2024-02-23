import { useCallback } from "react";
import useGetMode from "./use-get-mode";
import useSetMode from "./use-set-mode";

const useToggleMode = (): (() => void) => {
  const getMode = useGetMode();
  const setMode = useSetMode();

  return useCallback(() => {
    if (getMode() === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }, []);
};

export default useToggleMode;
