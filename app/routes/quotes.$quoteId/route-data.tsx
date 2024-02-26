import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";

const data = async ({ params }: LoaderFunctionArgs) => {
  const quote = await db.quotes.findUnique({
    where: { id: params.quoteId },
    select: { id: true, author: true, title: true },
  });

  if (!quote) {
    throw new Error("Quote not found!");
  }

  return json({ quote });
};

export default data;
