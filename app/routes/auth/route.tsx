import RouteContent from "./route-content";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export default function Route() {
  return <RouteContent />;
}
