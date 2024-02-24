import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Title from "~/components/layout/title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { db } from "~/utils/db.server";

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
    <section>
      <header>
        <Title>Quotes</Title>
      </header>
      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotes.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell className="align-top">{quote.title}</TableCell>
                <TableCell className="align-top">
                  {quote.author ?? ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
