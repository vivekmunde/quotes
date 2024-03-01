import RouteContent from "./route-content";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export default function QuoteLayoutRoute() {
  return <RouteContent />;
}
