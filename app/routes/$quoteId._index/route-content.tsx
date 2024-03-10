import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import If from "~/components/if";
import Layout from "~/components/layout";
import Quote from "~/components/quote";
import RouteError404 from "~/components/route-error/404";
import { Button } from "~/components/ui/button";
import { TMayBe } from "~/types";
import { TNextQuote, TQuote } from "./types";

const RouteContent: React.FC<{
  quote: TMayBe<TQuote>;
  nextQuote: TMayBe<TNextQuote>;
}> = ({ quote, nextQuote }) => {
  return quote ? (
    <React.Fragment>
      <Layout.Screen.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <Quote author={quote?.author} title={quote.title} />
        </div>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <If condition={!!nextQuote?.urlSegment}>
          <If.True>
            <div className="flex flex-row justify-end">
              <Link prefetch="render" to={`/${nextQuote?.urlSegment}`}>
                <Button icon>
                  <ChevronRight className="q h-8 w-8" />
                </Button>
              </Link>
            </div>
          </If.True>
        </If>
      </Layout.Screen.Footer>
    </React.Fragment>
  ) : (
    <RouteError404 />
  );
};

export default RouteContent;
