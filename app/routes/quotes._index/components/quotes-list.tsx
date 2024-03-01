import { Link } from "@remix-run/react";
import { Edit, Trash, View } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { TMayBe } from "~/types";

const QuoteIndex: React.FC<{ index: number }> = ({ index }) => {
  const width = Math.max(index.toString().length * 8 + 6, 20);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-centerstart">
        <div className="h-[6px] w-[4px] rounded-tl bg-neutral-300 dark:bg-neutral-600" />
        <div className="h-[2px] w-[4px] bg-neutral-300 dark:bg-neutral-600" />
      </div>
      <div className="flex flex-row">
        <div
          style={{ width: `${width}px` }}
          className="py-1 text-xs flex justify-center items-center rounded-tr rounded-bl rounded-br bg-neutral-300 dark:bg-neutral-600 text-neutral-950 dark:text-neutral-200 border-t border-transparent"
        >
          {index}
        </div>
      </div>
    </div>
  );
};

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
            <Link to={`/quotes/${quote.id}`} className="text-lg dark:font-thin">
              {quote.title}
            </Link>{" "}
            <span className="inline-flex flex-row flex-wrap items-center gap-2 text-nowrap">
              <span className="text-neutral-500 text-nowrap mr-2">
                {"- "}
                {quote.author ?? "Unknown"}
              </span>
              <span className="inline-flex flex-row items-center gap-2">
                <Link
                  to={`/quotes/${quote.id}`}
                  className="text-lg dark:font-thin"
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
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuotesList;
