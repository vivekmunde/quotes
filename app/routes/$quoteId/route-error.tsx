import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";
import layoutStyles from "~/styles/layout";

const RouteContent: React.FC = () => {
  return (
    <div className={layoutStyles.layout.base}>
      <Layout.Header />
      <CommonRouteError />
    </div>
  );
};

export default RouteContent;
