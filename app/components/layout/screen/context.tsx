import { createContext } from "react";
import { TContext } from "./types";

const Context = createContext<TContext>({
  variant: "default",
  onSetVariant: () => undefined,
});

export default Context;
