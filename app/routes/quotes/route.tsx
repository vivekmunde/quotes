import { Outlet } from "@remix-run/react";
import Page from "~/components/layout/page";

export default function QuotesLayoutRoute() {
  return (
    <Page>
      <Page.Header />
      <Outlet />
    </Page>
  );
}
