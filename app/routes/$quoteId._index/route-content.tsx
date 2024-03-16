import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import If from "~/components/if";
import Quote from "~/components/quote";
import RouteError404 from "~/components/route-error/404";
import { Button } from "~/components/ui/button";
import layoutStyles from "~/styles/layout";
import { TMayBe } from "~/types";
import { TNextQuote, TQuote } from "./types";

const RouteContent: React.FC<{
  quote: TMayBe<TQuote>;
  nextQuote: TMayBe<TNextQuote>;
}> = ({ quote, nextQuote }) => {
  return quote ? (
    <React.Fragment>
      <div className="flex flex-col justify-center">
        <div className={layoutStyles.container.wrapper}>
          <div className={layoutStyles.container.content}>
            <div className={layoutStyles.body.base}>
              <Quote author={quote?.author} title={quote.title} />
            </div>
          </div>
        </div>
      </div>
      <If condition={!!nextQuote?.urlSegment}>
        <If.True>
          <div className={layoutStyles.container.wrapper}>
            <div className={layoutStyles.container.content}>
              <div
                className={[
                  layoutStyles.body.base,
                  "flex flex-row justify-end",
                ].join(" ")}
              >
                <Link prefetch="render" to={`/${nextQuote?.urlSegment}`}>
                  <Button icon>
                    <ChevronRight className="q h-8 w-8" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </If.True>
      </If>
    </React.Fragment>
  ) : (
    <RouteError404 />
  );
};

export default RouteContent;
