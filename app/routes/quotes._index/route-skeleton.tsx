import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

const RouteLoading: React.FC = () => {
  return (
    <Layout.Screen.Body>
      <section>
        <Layout>
          <Layout.Header>
            <header className="flex-1 flex flex-row justify-between gap-6">
              <Layout.Header.Title className="flex-1">
                Quotes
              </Layout.Header.Title>
              <Skeleton className="h-10 w-[50%] mb-4" />
            </header>
          </Layout.Header>
          <Layout.Body>
            <Table>
              <TableBody className="border-0">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((it) => (
                  <TableRow className="border-0" key={it}>
                    <TableCell className="pl-0 pr-0">
                      <Skeleton className="h-7" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteLoading;
