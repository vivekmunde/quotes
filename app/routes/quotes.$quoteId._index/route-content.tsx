import { Link, useLocation, useSearchParams } from "@remix-run/react";
import { ChevronLeft, Edit, Trash } from "lucide-react";
import React from "react";
import If from "~/components/if";
import Quote from "~/components/quote";
import RouteError404 from "~/components/route-error/404";
import { Button } from "~/components/ui/button";
import ButtonGroup from "~/components/ui/button-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import layoutStyles from "~/styles/layout";
import { TMayBe } from "~/types";
import { TQuote } from "./types";

const RouteContent: React.FC<{
  quote: TMayBe<TQuote>;
}> = ({ quote }) => {
  const [searchParams] = useSearchParams();
  const backToUrl = searchParams.get("backTo") ?? "";

  const location = useLocation();
  const backToUrlForActions = encodeURIComponent(
    [location.pathname, location.search, location.hash].join("")
  );

  return quote ? (
    <React.Fragment>
      <div className="flex flex-col justify-center">
        <div className={layoutStyles.container.wrapper}>
          <div
            className={[
              layoutStyles.container.content,
              layoutStyles.body.base,
            ].join(" ")}
          >
            <div className="py-[5vh]">
              <Quote author={quote.author} title={quote.title} />
            </div>
          </div>
        </div>
      </div>
      <div className={layoutStyles.container.wrapper}>
        <div
          className={[
            layoutStyles.container.content,
            layoutStyles.footer.base,
            "flex flex-row justify-between",
          ].join(" ")}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  prefetch="intent"
                  to={backToUrl.length > 0 ? backToUrl : `/quotes`}
                >
                  <Button variant="outline" icon>
                    <ChevronLeft />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <div>
                  <If condition={backToUrl.length > 0}>
                    <If.True>Back</If.True>
                    <If.False>Quotes</If.False>
                  </If>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ButtonGroup className="justify-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    prefetch="intent"
                    to={`/quotes/${quote.id}/update?backTo=${backToUrlForActions}`}
                  >
                    <Button icon>
                      <Edit />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Update</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    prefetch="intent"
                    to={`/quotes/${quote.id}/delete?backTo=${backToUrlForActions}`}
                  >
                    <Button variant="destructive" icon>
                      <Trash />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Delete</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ButtonGroup>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <RouteError404 />
  );
};

export default RouteContent;
