export const getQuoteUrlSegment = (id: string, title: string) => {
  return [
    title
      .replace(/[^a-z0-9 ]/gi, "")
      .split(" ")
      .slice(0, 10)
      .map((it) => it.toLowerCase())
      .join("-"),
    id,
  ].join("___");
};

export const getQuoteIdFrmomUrlSegment = (urlSegment: string) => {
  return urlSegment.split("___").pop() ?? urlSegment;
};
