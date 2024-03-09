import { Link, useSearchParams } from "@remix-run/react";
import { ChevronLeft, Edit, Trash } from "lucide-react";
import React from "react";
import If from "~/components/if";
import Layout from "~/components/layout";
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
import { TMayBe } from "~/types";
import { TQuote } from "./types";

const RouteContent: React.FC<{
  quote: TMayBe<TQuote>;
}> = ({ quote }) => {
  const [searchParams] = useSearchParams();
  const backTo = searchParams.get("backTo") ?? "";

  return quote ? (
    <React.Fragment>
      <Layout.Screen.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <Quote author={quote.author} title={quote.title} />
        </div>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <div className="flex flex-row justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  prefetch="intent"
                  to={backTo.length > 0 ? backTo : `/quotes`}
                >
                  <Button variant="outline" icon>
                    <ChevronLeft />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <div>
                  <If condition={backTo.length > 0}>
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
                  <Link prefetch="intent" to={`/quotes/${quote.id}/edit`}>
                    <Button icon>
                      <Edit />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Edit</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link prefetch="intent" to={`/quotes/${quote.id}/delete`}>
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
      </Layout.Screen.Footer>
    </React.Fragment>
  ) : (
    <RouteError404 />
  );
};

export default RouteContent;
