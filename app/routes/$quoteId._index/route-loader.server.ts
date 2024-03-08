import { json, type LoaderFunctionArgs } from "@remix-run/node";
import getRandomQuote from "~/api/get-random-quote.server";
import { db } from "~/utils/server/db.server";
import { response404, response500 } from "~/utils/server/response.server";
import { TData } from "./types";

const quoteNotFoundMessage =
  "Quote you are looking for either has been removed or never did exist!";

const getQuote = async (quoteId: string) => {
  const quote = await db.quotes.findUnique({
    where: { id: quoteId },
    select: { author: true, title: true },
  });

  if (!quote) {
    throw new Error("404");
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

const getData = async ({ params }: LoaderFunctionArgs) => {
  if (!params.quoteId) {
    throw response404({ item: undefined, error: quoteNotFoundMessage });
  }

  try {
    const [quote, nextQuote] = await Promise.all([
      getQuote(params.quoteId),
      getNextQuote(params.quoteId),
    ]);

    const response: TData = { item: { quote, nextQuote } };

    return json(response);
  } catch (error: any) {
    if (error?.message === "404") {
      throw response404({ item: undefined, error: quoteNotFoundMessage });
    }
    return response500({ item: undefined });
  }
};

export default async function loader(args: LoaderFunctionArgs) {
  return await getData(args);
}
