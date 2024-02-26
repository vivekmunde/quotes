import { Outlet } from "@remix-run/react";
import Page from "~/components/layout/page";
import Header from "./header";

export default function QuotesLayoutRoute() {
  return (
    <Page>
      <Header />
      <Outlet />
    </Page>
  );
}
