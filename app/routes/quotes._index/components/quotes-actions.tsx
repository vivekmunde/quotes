import { Link, useLocation } from "@remix-run/react";
import { Edit, Trash, View } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { TMayBe } from "~/types";

const QuoteActions: React.FC<{
  quote: { id: string; title: string; author: TMayBe<string> };
}> = ({ quote }) => {
  const location = useLocation();
  const backToUrl = encodeURIComponent(
    [location.pathname, location.search, location.hash].join("")
  );

  return (
    <span className="inline-flex flex-row items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              prefetch="intent"
              to={`/quotes/${quote.id}?backTo=${backToUrl}`}
            >
              <Button
                variant="ghost"
                style={{
                  height: "auto",
                  width: "auto",
                  padding: 0,
                  margin: 0,
                }}
              >
                <View className="q h-3 w-3" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <div>View</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              prefetch="intent"
              to={`/quotes/${quote.id}/edit?backTo=${backToUrl}`}
            >
              <Button
                variant="ghost"
                style={{
                  height: "auto",
                  width: "auto",
                  padding: 0,
                  margin: 0,
                }}
              >
                <Edit className="q h-3 w-3" />
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
            <Link
              prefetch="intent"
              to={`/quotes/${quote.id}/delete?backTo=${backToUrl}`}
            >
              <Button
                variant="ghost"
                style={{
                  height: "auto",
                  width: "auto",
                  padding: 0,
                  margin: 0,
                }}
              >
                <Trash className="q h-3 w-3 text-destructive" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <div>Delete</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>{" "}
    </span>
  );
};

export default QuoteActions;
