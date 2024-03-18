import { TMayBe } from "~/types";
import { getUrl } from "./meta";

export const getQuoteTitle = (
  quote: TMayBe<{
    title: string;
    author?: TMayBe<string>;
  }>
) => {
  if (quote?.title) {
    const seoQuotesTitle = quote.title.substring(0, 50);

    return quote.title.length > 50 ? `${seoQuotesTitle}...` : seoQuotesTitle;
  }

  return undefined;
};

export const getQuoteUrl = (
  quote: TMayBe<{
    urlSegment?: TMayBe<string>;
  }>
) => {
  if (quote?.urlSegment) {
    return getUrl([quote.urlSegment]);
  }

  return getUrl();
};

export const getQuoteDescription = (
  quote: TMayBe<{
    title: string;
    author?: TMayBe<string>;
  }>
) => {
  return [quote?.title, quote?.author].filter(Boolean).join(" - ");
};

export const getQuoteAuthor = (
  quote: TMayBe<{
    author?: TMayBe<string>;
  }>
) => {
  return quote?.author;
};
