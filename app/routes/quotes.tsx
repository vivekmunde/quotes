import { Outlet } from "@remix-run/react";
import Body from "~/components/layout/body";
import Header from "~/components/layout/header";
import Page from "~/components/layout/page";

export default function QuotesRoute() {
  return (
    <Page>
      <Header />
      <Body>
        <Outlet />
      </Body>
    </Page>
  );
}
