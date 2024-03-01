import React from "react";
import If from "~/components/if";
import { Skeleton } from "~/components/ui/skeleton";
import H1 from "~/components/ui/typography/h1";
import { TMayBe } from "~/types";

export const Loading: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <Skeleton className="h-12" />
        <Skeleton className="h-12 md:hidden" />
        <Skeleton className="h-12 w-[75%]" />
      </div>
      <Skeleton className="h-4 w-[25%] mb-6" />
    </div>
  );
};

const Quote: React.FC<{ author: TMayBe<string>; title: string }> = ({
  author,
  title,
}) => {
  return (
    <section className="mb-[5vh] md:mb-[10vh]">
      <header>
        <div className="flex flex-row gap-1 mb-1">
          <img alt="quotes" src="/single-quote.png" className="h-4 w-2" />
          <img alt="quotes" src="/single-quote.png" className="h-4 w-2" />
        </div>
        <H1>{title}</H1>
        <If condition={(author ?? "").length > 0}>
          <If.True>
            <div className="text-neutral-500">- {author}</div>
          </If.True>
        </If>
      </header>
    </section>
  );
};

export default Quote;
