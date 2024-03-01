import Layout from "~/components/layout";
import QuotesTable from "./components/quotes-table";
import SearchForm from "./components/search-form";
import { TData } from "./types";

const RouteContent: React.FC<{
  data: TData;
}> = ({ data }) => {
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
            <QuotesTable quotes={data} />
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
