import type { LoaderFunctionArgs } from "@remix-run/node";
import getRandomQuote from "~/api/get-random-quote.server";
import { db } from "~/utils/server/db.server";
import { TData } from "./types";

const getQuote = async (quoteId: string) => {
  const quote = await db.quotes.findUnique({
    where: { id: quoteId },
    select: { author: true, title: true },
  });

  if (!quote) {
    throw new Error(
      JSON.stringify({ status: 404, statusText: "QUOTE_NOT_FOUND" })
    );
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
    throw new Error(
      JSON.stringify({ status: 404, statusText: "QUOTE_NOT_FOUND" })
    );
  }

  const [quote, nextQuote] = await Promise.all([
    getQuote(params.quoteId),
    getNextQuote(params.quoteId),
  ]);

  return { quote, nextQuote };
};

export default async function loader(args: LoaderFunctionArgs): Promise<TData> {
  return await getData(args);
}
