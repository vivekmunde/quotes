import { Await, Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import React, { Suspense } from "react";
import Layout from "~/components/layout";
import Quote from "~/components/quote";
import { Button } from "~/components/ui/button";
import { TMayBe } from "~/types";

const RouteContent: React.FC<{
  quote: { author: TMayBe<string>; title: string };
  nextQuotePromise: Promise<{
    id: string;
  }>;
}> = ({ quote, nextQuotePromise }) => {
  return (
    <React.Fragment>
      <Layout.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <Quote author={quote.author} title={quote.title} />
        </div>
      </Layout.Body>
      <Suspense>
        <Await resolve={nextQuotePromise}>
          {(nextQuote) => (
            <Layout.Footer>
              <div className="flex flex-row justify-end">
                <Link to={`/${nextQuote?.id}`}>
                  <Button size="icon">
                    <ChevronRight />
                  </Button>
                </Link>
              </div>
            </Layout.Footer>
          )}
        </Await>
      </Suspense>
    </React.Fragment>
  );
};

export default RouteContent;
