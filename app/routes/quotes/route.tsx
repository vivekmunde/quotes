import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Page from "~/components/layout/page";
import { authorizedAccess } from "~/utils/session.server";
import Header from "./header";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return authorizedAccess(request);
};

export default function QuotesLayoutRoute() {
  return (
    <Page>
      <Header />
      <Outlet />
    </Page>
  );
}
