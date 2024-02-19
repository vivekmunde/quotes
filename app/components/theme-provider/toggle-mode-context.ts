import { createContext } from "react";
import { TToggleModeContext } from "./types";

const ToggleModeContext = createContext<TToggleModeContext>({
  mode: "light",
  onToggle: () => undefined,
});

export default ToggleModeContext;
