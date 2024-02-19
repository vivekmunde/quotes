import { TMode } from "./types";

const gray1 = "rgba(250,250,250,1)";
const gray2 = "rgba(245,245,245,1)";
const gray3 = "rgba(240,240,240,1)";
const gray4 = "rgba(217,217,217,1)";
const gray5 = "rgba(191,191,191,1)";
const gray6 = "rgba(140,140,140,1)";
const gray7 = "rgba(89,89,89,1)";
const gray8 = "rgba(67,67,67,1)";
const gray9 = "rgba(38,38,38,1)";
const gray10 = "rgba(20,20,20,1)";

const getGrayShades = (
  mode?: TMode
): {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
} => {
  return {
    1: mode === "dark" ? gray10 : gray1,
    2: mode === "dark" ? gray9 : gray2,
    3: mode === "dark" ? gray8 : gray3,
    4: mode === "dark" ? gray7 : gray4,
    5: mode === "dark" ? gray6 : gray5,
    6: mode === "dark" ? gray5 : gray6,
    7: mode === "dark" ? gray4 : gray7,
    8: mode === "dark" ? gray3 : gray8,
    9: mode === "dark" ? gray2 : gray9,
    10: mode === "dark" ? gray1 : gray10,
  };
};

export default getGrayShades;
