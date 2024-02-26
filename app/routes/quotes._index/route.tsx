import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Body from "~/components/layout/body";
import Title from "~/components/layout/title";
import { db } from "~/utils/db.server";
import QuotesTable from "./quotes-table";

export const loader = async () => {
  return json({
    quotes: await db.quotes.findMany({
      orderBy: { updatedAt: "desc" },
      select: { id: true, title: true, author: true },
      take: 10,
    }),
  });
};

export default function QuotesIndexRoute() {
  const { quotes } = useLoaderData<typeof loader>();

  return (
    <Body>
      <section>
        <header>
          <Title>Quotes</Title>
        </header>
        <QuotesTable quotes={quotes} />
      </section>
    </Body>
  );
}
