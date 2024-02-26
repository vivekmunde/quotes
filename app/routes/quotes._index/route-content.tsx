import Page from "~/components/layout/page";
import QuotesTable from "./quotes-table";

const RouteContent: React.FC<{
  quotes: { id: string; title: string; author: string | null }[];
}> = ({ quotes }) => {
  return (
    <Page.Body>
      <section>
        <header>
          <Page.Title>Quotes</Page.Title>
        </header>
        <QuotesTable quotes={quotes} />
      </section>
    </Page.Body>
  );
};

export default RouteContent;
