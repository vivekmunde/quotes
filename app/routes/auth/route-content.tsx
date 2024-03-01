import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";

const RouteContent: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default RouteContent;
