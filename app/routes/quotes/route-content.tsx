import { Outlet } from "@remix-run/react";
import layoutStyles from "~/styles/layout";
import Header from "./components/header";

const RouteContent: React.FC = () => {
  return (
    <div
      className={[
        layoutStyles.layout.base,
        layoutStyles.layout.fixedHeader,
      ].join(" ")}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default RouteContent;
