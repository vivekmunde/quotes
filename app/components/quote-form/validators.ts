export const validateTitle = (val: string | undefined | null) => {
  if ((val ?? "").length === 0) {
    return "Please enter the quote!";
  }

  if ((val ?? "").length < 20) {
    return "The quote is too small!";
  }
};
