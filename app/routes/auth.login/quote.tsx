import If from "~/components/if";
import H2 from "~/components/ui/typography/h2";
import { TMayBe } from "~/types";

const Quote: React.FC<{
  quote: { title: string; author?: TMayBe<string> };
}> = ({ quote }) => {
  return (
    <section className="pb-4">
      <header>
        <div className="flex flex-row gap-1 mb-1">
          <img alt="quotes" src="/single-quote.png" className="h-4 w-2" />
          <img alt="quotes" src="/single-quote.png" className="h-4 w-2" />
        </div>
        <H2>{quote.title}</H2>
        <If condition={(quote.author ?? "").length > 0}>
          <If.True>
            <div>- {quote.author}</div>
          </If.True>
        </If>
      </header>
    </section>
  );
};

export default Quote;
