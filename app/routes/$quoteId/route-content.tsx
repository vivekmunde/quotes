import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";
import Header from "./header";

const RouteContent: React.FC = () => {
  return (
    <Layout.Screen>
      <Header />
      <Outlet />
    </Layout.Screen>
  );
};

export default RouteContent;
