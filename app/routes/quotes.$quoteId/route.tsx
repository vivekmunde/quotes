import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Body from "~/components/layout/body";
import { db } from "~/utils/db.server";
import Quote from "./quote";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const quote = await db.quotes.findUnique({
    where: { id: params.quoteId },
    select: { id: true, author: true, title: true },
  });
  if (!quote) {
    throw new Error("Quote not found!");
  }
  return json({ quote });
};

export default function QuotesIndexRoute() {
  const { quote } = useLoaderData<typeof loader>();

  return (
    <Body className="flex flex-col justify-center">
      <div className="sm:pb-[5vh] md:pb-[15vh] lg:pb-[20vh]">
        <Quote author={quote.author} title={quote.title} />
      </div>
    </Body>
  );
}
