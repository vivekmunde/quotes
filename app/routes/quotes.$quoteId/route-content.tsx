import Page from "~/components/layout/page";
import Quote from "./quote";

const RouteContent: React.FC<{
  quote: { author: string | null; title: string };
}> = ({ quote }) => {
  return (
    <Page.Body className="flex flex-col justify-center sm:pb-[5vh] md:pb-[15vh] lg:pb-[15vh]">
      <Quote author={quote.author} title={quote.title} />
    </Page.Body>
  );
};

export default RouteContent;
