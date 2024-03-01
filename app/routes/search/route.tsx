import Layout from "~/components/layout";
import RouteContent from "./route-content";

export default function SearchQuotesRoute() {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <RouteContent />
      </Layout.Body>
    </Layout>
  );
}
