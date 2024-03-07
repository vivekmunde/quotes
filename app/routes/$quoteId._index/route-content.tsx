import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import Layout from "~/components/layout";
import Quote from "~/components/quote";
import RouteError404 from "~/components/route-error/404";
import { Button } from "~/components/ui/button";
import { TData } from "./types";

const RouteContent: React.FC<{
  data: TData;
}> = ({ data }) => {
  const { quote, nextQuote } = data ?? {};

  return quote ? (
    <React.Fragment>
      <Layout.Screen.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <Quote author={quote?.author} title={quote.title} />
        </div>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <div className="flex flex-row justify-end">
          <Link prefetch="render" to={`/${nextQuote?.id}`}>
            <Button icon>
              <ChevronRight className="q h-8 w-8" />
            </Button>
          </Link>
        </div>
      </Layout.Screen.Footer>
    </React.Fragment>
  ) : (
    <RouteError404 />
  );
};

export default RouteContent;
