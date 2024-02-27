import If from "~/components/if";
import H2 from "~/components/ui/typography/h2";

const Quote: React.FC<{
  quote: { title: string; author?: string | undefined | null };
}> = ({ quote }) => {
  return (
    <section>
      <header>
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
