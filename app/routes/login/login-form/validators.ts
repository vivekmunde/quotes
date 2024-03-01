import { TMayBe } from "~/types";

export const validateLoginId = (val: TMayBe<string>) => {
  if ((val ?? "").length === 0) {
    return "Please enter login Id!";
  }
};

export const validatePassword = (val: TMayBe<string>) => {
  if ((val ?? "").length === 0) {
    return "Please enter password!";
  }
};
