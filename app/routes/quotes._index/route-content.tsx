import Layout from "~/components/layout";
import { TMayBe } from "~/types";
import QuotesTable from "./quotes-table";
import SearchForm from "./search-form";

const RouteContent: React.FC<{
  quotes: { id: string; title: string; author: TMayBe<string> }[];
}> = ({ quotes }) => {
  return (
    <Layout.Body>
      <section>
        <header className="flex flex-row justify-between gap-6">
          <Layout.Title className="flex-1">Quotes</Layout.Title>
          <div className="flex-1">
            <SearchForm />
          </div>
        </header>
        <QuotesTable quotes={quotes} />
      </section>
    </Layout.Body>
  );
};

export default RouteContent;
