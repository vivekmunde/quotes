import { useNavigate, useParams } from "@remix-run/react";
import { useEffect } from "react";
import routeMeta from "./route-meta";
import RouteSkeleton from "./route-skeleton";

export const meta = routeMeta;

const RouteContent: React.FC = () => {
  const { quoteId } = useParams<{ quoteId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(quoteId?.toLowerCase() === "@next" ? "/" : `/${quoteId}`, {
      replace: true,
    });
  }, []);

  return <RouteSkeleton />;
};

export default RouteContent;
