import Page from "~/components/layout/page";
import RouteContent from "./route-content";

export default function SearchQuotesRoute() {
  return (
    <Page>
      <Page.Header />
      <Page.Body>
        <RouteContent />
      </Page.Body>
    </Page>
  );
}
