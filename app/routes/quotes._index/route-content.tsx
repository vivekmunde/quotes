import Layout from "~/components/layout";
import { TMayBe } from "~/types";
import QuotesTable from "./quotes-table";
import SearchForm from "./search-form";

const RouteContent: React.FC<{
  quotes: { id: string; title: string; author: TMayBe<string> }[];
}> = ({ quotes }) => {
  return (
    <Layout.Screen.Body>
      <section>
        <Layout>
          <Layout.Header>
            <header className="flex-1 flex flex-row justify-between gap-6">
              <Layout.Header.Title className="flex-1">
                Quotes
              </Layout.Header.Title>
              <div className="flex-1">
                <SearchForm />
              </div>
            </header>
          </Layout.Header>
          <Layout.Body>
            <QuotesTable quotes={quotes} />
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
