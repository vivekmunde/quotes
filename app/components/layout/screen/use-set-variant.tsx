import { useContext } from "react";
import Context from "./context";
import { TVariant } from "./types";

const useSetVariant = (): ((variant: TVariant) => void) => {
  const { onSetVariant } = useContext(Context);

  return (variant: TVariant) => {
    if (onSetVariant) {
      onSetVariant(variant);
    }
  };
};

export default useSetVariant;
