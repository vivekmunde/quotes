import { useNavigate, useParams } from "@remix-run/react";
import { useEffect } from "react";
import RouteSkeleton from "./route-skeleton";

const RouteContent: React.FC = () => {
  const { quoteId } = useParams<{ quoteId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if ((quoteId ?? "").length < 36) {
      navigate("/");
    } else {
      navigate(`/${quoteId}`);
    }
  }, []);

  return <RouteSkeleton />;
};

export default RouteContent;
