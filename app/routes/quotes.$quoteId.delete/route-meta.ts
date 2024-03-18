import type { MetaFunction } from "@remix-run/node";
import {
  getAuthorTag,
  getDescriptionTag,
  getNoRobotTag,
  getTitleTag,
  getUrlTag,
} from "~/utils/meta";
import { getQuoteAuthor, getQuoteDescription } from "~/utils/quotes-seo";
import routeLoader from "./route-loader.server";

const meta: MetaFunction<typeof routeLoader> = ({ data }) => {
  const quote = data?.item;

  return [
    getNoRobotTag(),
    getTitleTag("Delete a quote"),
    getDescriptionTag(["Delete quote", getQuoteDescription(quote)].join(" : ")),
    getAuthorTag(getQuoteAuthor(quote)),
    getUrlTag(["quotes", quote?.id, "delete"]),
  ];
};

export default meta;
