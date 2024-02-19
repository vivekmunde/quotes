import { useContext } from "react";
import ToggleModeContext from "./toggle-mode-context";
import { TMode } from "./types";

const useGetMode = (): TMode => {
  const { mode } = useContext(ToggleModeContext);
  return mode;
};

export default useGetMode;
