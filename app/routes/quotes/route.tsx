import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";
import authorizedAccess from "~/utils/server/auth/authorized-access.server";
import Header from "./header";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return authorizedAccess<null>(request, () => null);
};

export default function QuotesLayoutRoute() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}
