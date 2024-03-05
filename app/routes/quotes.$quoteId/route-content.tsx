import { Link } from "@remix-run/react";
import { ChevronLeft, Edit, Trash } from "lucide-react";
import React from "react";
import Layout from "~/components/layout";
import Quote from "~/components/quote";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { TData } from "./types";

const RouteContent: React.FC<{
  data: TData;
}> = ({ data }) => {
  const { quote } = data;

  return (
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
                <Link prefetch="intent" to="/quotes">
                  <Button variant="outline" icon>
                    <ChevronLeft />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <div>Quotes</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex flex-row justify-end gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button icon>
                    <Edit />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Edit</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive" icon>
                    <Trash />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Delete</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </Layout.Screen.Footer>
    </React.Fragment>
  );
};

export default RouteContent;
