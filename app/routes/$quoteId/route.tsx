import { Outlet } from "@remix-run/react";
import Header from "~/components/layout/header";
import Page from "~/components/layout/page";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export default function QuoteIndexRoute() {
  return (
    <Page>
      <Header />
      <Outlet />
    </Page>
  );
}
