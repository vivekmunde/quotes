import { Link } from "@remix-run/react";
import React from "react";
import { TMayBe } from "~/types";
import QuoteActions from "./quotes-actions";
import QuoteIndex from "./quotes-index";

const QuotesList: React.FC<{
  quotes: { id: string; title: string; author: TMayBe<string> }[];
  startIndex: number;
}> = ({ quotes, startIndex }) => {
  return (
    <div className="flex flex-col gap-4">
      {quotes.map((quote, index) => (
        <div key={quote.id} className="flex flex-row items-start gap-4">
          <QuoteIndex index={startIndex - 1 + (index + 1)} />
          <div className="flex-1">
            <Link
              prefetch="intent"
              to={`/quotes/${quote.id}`}
              className="text-lg dark:font-thin"
            >
              {quote.title}
            </Link>{" "}
            <span className="inline-flex flex-row flex-wrap items-center gap-2 text-nowrap">
              <span className="text-neutral-500 text-nowrap mr-2">
                {"- "}
                {quote.author ?? "Unknown"}
              </span>
              <QuoteActions quote={quote} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuotesList;
