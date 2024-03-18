import type { MetaFunction } from "@remix-run/node";
import {
  getAuthorTag,
  getDescriptionTag,
  getRobotTag,
  getTitleTag,
  getUrlTag,
} from "~/utils/meta";
import {
  getQuoteAuthor,
  getQuoteDescription,
  getQuoteTitle,
  getQuoteUrl,
} from "~/utils/quotes-seo";
import routeLoader from "./route-loader.server";

const meta: MetaFunction<typeof routeLoader> = ({ data }) => {
  const quote = data?.item?.quote;

  return [
    getRobotTag(),
    getTitleTag(getQuoteTitle(quote)),
    getDescriptionTag(getQuoteDescription(quote)),
    getAuthorTag(getQuoteAuthor(quote)),
    getUrlTag([getQuoteUrl(quote)]),
  ];
};

export default meta;
