import { useContext } from "react";
import ToggleModeContext from "./toggle-mode-context";

const useToggleMode = (): (() => void) => {
  const { onToggle } = useContext(ToggleModeContext);
  return onToggle;
};

export default useToggleMode;
