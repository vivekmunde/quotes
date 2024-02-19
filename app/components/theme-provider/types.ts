import { TMode } from "../../theme/types";

export type TToggleModeContext = {
  mode: TMode;
  onToggle: () => void;
};
