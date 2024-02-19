import { TThemeVariables } from "./types";

const colorPrimary = "#ec4899";

export const light: Partial<TThemeVariables> = {
  "color.background.body": "#ffffff",
  "color.background.component": "#ffffff",
  "color.primary": colorPrimary,
  "color.link": colorPrimary,
};

export const dark: Partial<TThemeVariables> = {
  "color.background.body": "#000000",
  "color.background.component": "#000000",
  "color.primary": colorPrimary,
  "color.link": colorPrimary,
};
