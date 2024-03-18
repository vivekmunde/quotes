import { json, type LoaderFunctionArgs } from "@remix-run/node";
import getRandomQuote from "~/api/get-random-quote.server";
import { db } from "~/utils/server/db.server";
import { getQuoteIdFrmomUrlSegment } from "~/utils/server/quotes.server";
import { response404, response500 } from "~/utils/server/response.server";
import { TData } from "./types";

const quoteNotFoundMessage =
  "Quote you are looking for either has been removed or never did exist!";

const getQuote = async (quoteId: string) => {
  const quote = await db.quotes.findUnique({
    where: quoteId.length === 5 ? { shortId: quoteId } : { id: quoteId },
    select: { author: true, title: true, urlSegment: true },
  });

  if (!quote) {
    throw new Error("404");
  }

  return quote;
};

const getNextQuote = async (
  forQuoteId: string
): Promise<{ urlSegment: string }> => {
  const nextQuote = await getRandomQuote();

  if (
    forQuoteId === (forQuoteId.length === 5 ? nextQuote.shortId : nextQuote.id)
  ) {
    return getNextQuote(forQuoteId);
  }

  return { urlSegment: nextQuote.urlSegment ?? nextQuote.id };
};

const getData = async ({ params }: LoaderFunctionArgs) => {
  if (!params.quoteId) {
    throw response404({ item: undefined, error: quoteNotFoundMessage });
  }

  try {
    const quoteId = getQuoteIdFrmomUrlSegment(params.quoteId);

    const [quote, nextQuote] = await Promise.all([
      getQuote(quoteId),
      getNextQuote(quoteId),
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
