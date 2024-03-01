import { Link } from "@remix-run/react";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { TMayBe } from "~/types";

const QuotesTable: React.FC<{
  quotes: { id: string; title: string; author: TMayBe<string> }[];
}> = ({ quotes }) => {
  return (
    <div className="border rounded">
      <Table>
        <TableBody>
          {quotes.map((quote) => (
            <TableRow key={quote.id}>
              <TableCell className="align-top">
                <Link to={`/quotes/${quote.id}`} className="block">
                  <span>{quote.title}</span>
                  <span className="text-neutral-500 text-nowrap">
                    {" - "}
                    {quote.author ?? "Unknown"}
                  </span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default QuotesTable;
