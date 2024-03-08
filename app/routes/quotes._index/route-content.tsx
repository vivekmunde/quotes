import If from "~/components/if";
import Layout from "~/components/layout";
import NoQuoteFound from "./components/no-quote-found";
import Pagination from "./components/pagination";
import QuotesList from "./components/quotes-list";
import SearchForm from "./components/search-form";
import { TQuote } from "./types";

const RouteContent: React.FC<{
  items: TQuote[];
  total: number;
  page: number;
  size: number;
}> = ({ items, total, page, size }) => {
  return (
    <Layout.Screen.Body>
      <section>
        <Layout>
          <Layout.Header>
            <header className="flex-1 md:flex flex-row justify-between gap-10">
              <Layout.Header.Title className="flex-1">
                Quotes
              </Layout.Header.Title>
              <div className="flex flex-row items-start gap-2 sm:mb-4 md:w-[60%]">
                <div className="flex-1">
                  <SearchForm />
                </div>
                <Pagination total={total} page={page} size={size} />
              </div>
            </header>
          </Layout.Header>
          <Layout.Body>
            <If condition={items.length > 0}>
              <If.True>
                <QuotesList quotes={items} startIndex={page * size + 1} />
              </If.True>
              <If.False>
                <NoQuoteFound />
              </If.False>
            </If>
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
