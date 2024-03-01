import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { db } from "~/utils/server/db.server";
import delayedPromise from "~/utils/server/delayed-promise.server";
import { TData } from "./types";

const getQuote = async (quoteId: string) => {
  const quote = await db.quotes.findUnique({
    where: { id: quoteId },
    select: { id: true, author: true, title: true },
  });

  if (!quote) {
    throw new Error("Quote not found!");
  }

  return quote;
};

const getData = async ({ params }: LoaderFunctionArgs): Promise<TData> => {
  if (!params.quoteId) {
    throw new Error("Quote not found!");
  }

  const quote = await getQuote(params.quoteId);

  return { quote };
};

const loader = async (args: LoaderFunctionArgs) => {
  return defer({ dataPromise: delayedPromise(() => getData(args)) });
};

export default loader;
