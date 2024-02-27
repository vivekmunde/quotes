import Page from "~/components/layout/page";
import QuotesTable from "./quotes-table";
import SearchForm from "./search-form";

const RouteContent: React.FC<{
  quotes: { id: string; title: string; author: string | null }[];
}> = ({ quotes }) => {
  return (
    <Page.Body>
      <section>
        <header className="flex flex-row justify-between gap-6">
          <Page.Title className="flex-1">Quotes</Page.Title>
          <div className="flex-1">
            <SearchForm />
          </div>
        </header>
        <QuotesTable quotes={quotes} />
      </section>
    </Page.Body>
  );
};

export default RouteContent;
