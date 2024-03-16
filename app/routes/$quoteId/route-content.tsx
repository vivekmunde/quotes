import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";
import layoutStyles from "~/styles/layout";

const RouteContent: React.FC = () => {
  return (
    <div className={layoutStyles.layout.base}>
      <div className={layoutStyles.container.wrapper}>
        <div className={layoutStyles.container.content}>
          <Layout.Header />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default RouteContent;
