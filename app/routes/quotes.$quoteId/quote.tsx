import If from "~/components/if";
import H1 from "~/components/ui/typography/h1";

const Quote: React.FC<{ author: string | null; title: string }> = ({
  author,
  title,
}) => {
  return (
    <section>
      <header>
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
