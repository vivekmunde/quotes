import { Outlet } from "@remix-run/react";
import Page from "~/components/layout/quote";
import Header from "./header";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export default function QuoteLayoutRoute() {
  return (
    <Page>
      <Header />
      <Outlet />
    </Page>
  );
}
