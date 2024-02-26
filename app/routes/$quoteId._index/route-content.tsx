import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import { Await, Link } from "@remix-run/react";
import React, { Suspense } from "react";
import Page from "~/components/layout/quote";
import { Button } from "~/components/ui/button";
import Quote from "./quote";

const RouteContent: React.FC<{
  quote: { author: string | null; title: string };
  nextQuotePromise: Promise<{
    id: string;
  }>;
}> = ({ quote, nextQuotePromise }) => {
  return (
    <React.Fragment>
      <Page.Body>
        <Quote author={quote.author} title={quote.title} />
      </Page.Body>
      <Suspense>
        <Await resolve={nextQuotePromise}>
          {(nextQuote) => (
            <Page.Footer>
              <div className="flex flex-row justify-end">
                <Link to={`/${nextQuote?.id}`}>
                  <Button variant="outline" size="icon">
                    <ThickArrowRightIcon />
                  </Button>
                </Link>
              </div>
            </Page.Footer>
          )}
        </Await>
      </Suspense>
    </React.Fragment>
  );
};

export default RouteContent;
