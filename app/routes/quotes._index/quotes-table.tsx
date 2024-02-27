import { Link } from "@remix-run/react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const QuotesTable: React.FC<{
  quotes: { id: string; title: string; author: string | null }[];
}> = ({ quotes }) => {
  return (
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
              <TableCell className="align-top">
                <Link to={`/quotes/${quote.id}`}>{quote.title}</Link>
              </TableCell>
              <TableCell className="align-top text-nowrap">
                {quote.author ?? ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default QuotesTable;
