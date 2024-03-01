import Layout from "~/components/layout";
import Quote from "~/components/quote";
import { TMayBe } from "~/types";

const RouteContent: React.FC<{
  quote: { author: TMayBe<string>; title: string };
}> = ({ quote }) => {
  return (
    <Layout.Body className="flex flex-col justify-center">
      <div className="mb-[5vh] md:mb-[10vh]">
        <Quote author={quote.author} title={quote.title} />
      </div>
    </Layout.Body>
  );
};

export default RouteContent;
