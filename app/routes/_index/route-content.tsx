import Layout from "~/components/layout";
import RouteSkeleton from "./route-skeleton";
import { TData } from "./types";

const RouteContent: React.FC<{ data: TData }> = () => {
  return (
    <Layout.Screen>
      <RouteSkeleton />
    </Layout.Screen>
  );
};

export default RouteContent;
