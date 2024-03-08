import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";

const RouteContent: React.FC = () => {
  return (
    <Layout.Screen>
      <Layout.Screen.Header />
      <CommonRouteError />
    </Layout.Screen>
  );
};

export default RouteContent;
