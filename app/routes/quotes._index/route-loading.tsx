import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const RouteLoading: React.FC = () => {
  return (
    <Layout.Screen.Body>
      <section>
        <header>
          <Skeleton className="h-6 w-[250px] mb-6" />
        </header>
        <Table>
          <TableHeader className="[&_tr]:border-b-0">
            <TableRow className="border-0">
              <TableHead className="w-[70%] pl-0">
                <Skeleton className="h-4" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((it) => (
              <TableRow className="border-0" key={it}>
                <TableCell className="align-top pl-0">
                  <Skeleton className="h-4" />
                </TableCell>
                <TableCell className="align-top">
                  <Skeleton className="h-4" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteLoading;
