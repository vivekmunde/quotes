import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";
import Header from "./components/header";

const RouteContent: React.FC = () => {
  return (
    <Layout.Screen>
      <Header />
      <CommonRouteError />
    </Layout.Screen>
  );
};

export default RouteContent;
