import RouteContainer from "~/components/route-container";
import routeAction from "./route-action.server";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";

export const ErrorBoundary = RouteError;

export const action = routeAction;

export const loader = routeLoader;

export default function Route() {
  return (
    <RouteContainer>
      <RouteContent />
    </RouteContainer>
  );
}
