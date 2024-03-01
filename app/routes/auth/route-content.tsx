import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";

const RouteContent: React.FC = () => {
  return (
    <Layout.Screen>
      <Layout.Screen.Header />
      <Outlet />
    </Layout.Screen>
  );
};

export default RouteContent;
