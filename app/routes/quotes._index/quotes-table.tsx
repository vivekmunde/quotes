import { Link } from "@remix-run/react";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

const QuotesTable: React.FC<{
  quotes: { id: string; title: string; author: string | null }[];
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
                  <span className="text-neutral-500">
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
