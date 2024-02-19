import { theme } from "antd";

const getColorShades = (
  color: string,
  algorithm?: "light" | "dark"
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
  const token = theme.getDesignToken({
    algorithm:
      algorithm === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      blue: color,
    },
  });

  return {
    1: token.blue1,
    2: token.blue2,
    3: token.blue3,
    4: token.blue4,
    5: token.blue5,
    6: token.blue6,
    7: token.blue7,
    8: token.blue8,
    9: token.blue9,
    10: token.blue10,
  };
};

export default getColorShades;
