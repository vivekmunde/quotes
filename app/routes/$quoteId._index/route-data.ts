import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { db } from "~/utils/db.server";
import getRandomQuote from "../_index/route-data";

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

const data = async ({ params }: LoaderFunctionArgs) => {
  if (!params.quoteId) {
    throw new Error("Quote not found!");
  }

  const quote = await getQuote(params.quoteId);
  const nextQuotePromise = getNextQuote(params.quoteId);

  return defer({ quote, nextQuotePromise });
};

export default data;
