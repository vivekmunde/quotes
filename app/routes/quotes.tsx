import { Outlet } from "@remix-run/react";
import Header from "~/components/layout/header";
import Page from "~/components/layout/page";

export default function QuotesRoute() {
  return (
    <Page>
      <Header />
      <Outlet />
    </Page>
  );
}
