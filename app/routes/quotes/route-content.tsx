import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";
import Header from "./components/header";

const RouteContent: React.FC = () => {
  return (
    <Layout.AdminScreen>
      <Header />
      <Outlet />
    </Layout.AdminScreen>
  );
};

export default RouteContent;
