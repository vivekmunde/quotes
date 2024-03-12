import { useSearchParams } from "@remix-run/react";
import React from "react";
import If from "~/components/if";
import Layout from "~/components/layout";
import NoQuoteFound from "./components/no-quote-found";
import { NextPrevious, Range } from "./components/pagination";
import QuotesList from "./components/quotes-list";
import SearchForm from "./components/search-form";
import { TQuote } from "./types";
import { getSearchWords } from "./utils";

const RouteContent: React.FC<{
  items: TQuote[];
  total: number;
  page: number;
  size: number;
}> = ({ items, total, page, size }) => {
  const [searchParams] = useSearchParams();
  const query = getSearchWords(searchParams.get("q"));

  return (
    <React.Fragment>
      <Layout.Screen.Body>
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
                <div className="flex flex-row justify-between gap-1">
                  <Range
                    total={total}
                    page={page}
                    size={size}
                    className="p-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded text-sm flex flex-row items-center"
                  />
                  <NextPrevious total={total} page={page} size={size} />
                </div>
              </div>
            </header>
          </Layout.Header>
          <Layout.Body className="flex-1 overflow-auto">
            <If condition={items.length > 0}>
              <If.True>
                <QuotesList
                  quotes={items}
                  startIndex={page * size + 1}
                  highlightWords={query.words}
                />
              </If.True>
              <If.False>
                <NoQuoteFound />
              </If.False>
            </If>
          </Layout.Body>
        </Layout>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <div className="flex flex-row justify-between items-center gap-1">
          <Range total={total} page={page} size={size} />
          <NextPrevious total={total} page={page} size={size} />
        </div>
      </Layout.Screen.Footer>
    </React.Fragment>
  );
};

export default RouteContent;
