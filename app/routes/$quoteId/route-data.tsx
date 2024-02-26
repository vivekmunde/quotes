import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer, json } from "@remix-run/node";
import { db } from "~/utils/db.server";

const getQuote = async (quoteId: string) => {
  return await db.quotes.findUnique({
    where: { id: quoteId },
    select: { author: true, title: true },
  });
};

const getNextQuote = async (forQuoteId: string): Promise<{ id: string }> => {
  const count = await db.quotes.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [nextQuote] = await db.quotes.findMany({
    skip: randomRowNumber,
    take: 1,
    select: { id: true },
  });

  if (forQuoteId === nextQuote.id) {
    return getNextQuote(forQuoteId);
  }

  return nextQuote;
};

const data = async ({ params }: LoaderFunctionArgs) => {
  if (!params.quoteId) {
    throw new Error("Quote not found!");
  }

  const quote = await getQuote(params.quoteId);
  const nextQuote = await getNextQuote(params.quoteId);

  return json({ quote, nextQuote: defer(nextQuote) });
};

export default data;
