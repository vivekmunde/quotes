export const validateLoginId = (val: string | undefined | null) => {
  if ((val ?? "").length === 0) {
    return "Please enter login Id!";
  }
};

export const validatePassword = (val: string | undefined | null) => {
  if ((val ?? "").length === 0) {
    return "Please enter password!";
  }
};
