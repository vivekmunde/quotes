import type { MetaFunction } from "@remix-run/node";
import {
  getAuthorTag,
  getDescriptionTag,
  getNoRobotTag,
  getTitleTag,
  getUrlTag,
} from "~/utils/meta";
import {
  getQuoteAuthor,
  getQuoteDescription,
  getQuoteTitle,
} from "~/utils/quotes-seo";
import routeLoader from "./route-loader.server";

const meta: MetaFunction<typeof routeLoader> = ({ data }) => {
  const quote = data?.item;

  return [
    getNoRobotTag(),
    getTitleTag(getQuoteTitle(quote)),
    getDescriptionTag(getQuoteDescription(quote)),
    getAuthorTag(getQuoteAuthor(quote)),
    getUrlTag(["quotes", quote?.id]),
  ];
};

export default meta;
