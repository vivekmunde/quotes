import Body from "~/components/layout/body";
import Title from "~/components/layout/title";
import QuotesTable from "./quotes-table";

const RouteContent: React.FC<{
  quotes: { id: string; title: string; author: string | null }[];
}> = ({ quotes }) => {
  return (
    <Body>
      <section>
        <header>
          <Title>Quotes</Title>
        </header>
        <QuotesTable quotes={quotes} />
      </section>
    </Body>
  );
};

export default RouteContent;
