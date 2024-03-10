const urlSegmentSeparator = "___";

export const getQuoteUrlSegment = (id: string, title: string) => {
  return [
    title
      .replace(/[^a-z0-9 ]/gi, "")
      .split(" ")
      .filter((it) => it.trim().length > 0)
      .slice(0, 10)
      .map((it) => it.toLowerCase())
      .join("-"),
    id,
  ].join(urlSegmentSeparator);
};

export const getQuoteIdFrmomUrlSegment = (urlSegment: string) => {
  return urlSegment.split(urlSegmentSeparator).pop() ?? urlSegment;
};
