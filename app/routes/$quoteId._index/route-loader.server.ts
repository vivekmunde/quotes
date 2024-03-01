import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import getRandomQuote from "~/data/get-random-quote.server";
import { db } from "~/utils/server/db.server";
import delayedPromise from "~/utils/server/delayed-promise.server";
import { TData } from "./types";

const getQuote = async (quoteId: string) => {
  const quote = await db.quotes.findUnique({
    where: { id: quoteId },
    select: { author: true, title: true },
  });

  if (!quote) {
    throw new Error("Quote not found!");
  }

  return quote;
};

const getNextQuote = async (forQuoteId: string): Promise<{ id: string }> => {
  const nextQuote = await getRandomQuote();

  if (forQuoteId === nextQuote.id) {
    return getNextQuote(forQuoteId);
  }

  return { id: nextQuote.id };
};

const getData = async ({ params }: LoaderFunctionArgs): Promise<TData> => {
  if (!params.quoteId) {
    throw new Error("Quote not found!");
  }

  const [quote, nextQuote] = await Promise.all([
    getQuote(params.quoteId),
    getNextQuote(params.quoteId),
  ]);

  return { quote, nextQuote };
};

const loader = async (args: LoaderFunctionArgs) => {
  return defer({ dataPromise: delayedPromise(() => getData(args)) });
};

export default loader;
