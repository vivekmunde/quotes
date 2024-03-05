import type { LoaderFunctionArgs } from "@remix-run/node";
import { authorizedAccess } from "~/utils/server/auth";
import { db } from "~/utils/server/db.server";
import { TData } from "./types";

const getQuote = async (quoteId: string) => {
  const quote = await db.quotes.findUnique({
    where: { id: quoteId },
    select: { id: true, author: true, title: true },
  });

  if (!quote) {
    throw new Error(
      JSON.stringify({
        statusText: "QUOTE_NOT_FOUND",
        status: 404,
      })
    );
  }

  return quote;
};

const getData = async ({ params }: LoaderFunctionArgs) => {
  if (!params.quoteId) {
    throw new Error(
      JSON.stringify({
        statusText: "QUOTE_NOT_FOUND",
        status: 404,
      })
    );
  }

  const quote = await getQuote(params.quoteId);

  return { quote };
};

export default async function loader(args: LoaderFunctionArgs): Promise<TData> {
  return await authorizedAccess(args.request, () => getData(args));
}
