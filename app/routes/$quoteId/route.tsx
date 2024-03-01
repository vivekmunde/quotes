import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";
import Header from "./header";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export default function QuoteLayoutRoute() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}
