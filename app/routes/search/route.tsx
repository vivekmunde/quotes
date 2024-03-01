import Layout from "~/components/layout";
import RouteContent from "./route-content";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export default function SearchQuotesRoute() {
  return (
    <Layout.Screen>
      <Layout.Screen.Header />
      <Layout.Screen.Body>
        <RouteContent />
      </Layout.Screen.Body>
    </Layout.Screen>
  );
}
