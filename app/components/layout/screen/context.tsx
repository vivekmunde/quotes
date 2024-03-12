import { createContext } from "react";

export type TContext = { variant?: "default" | "box" };

const Context = createContext<TContext>({ variant: "default" });

export default Context;
