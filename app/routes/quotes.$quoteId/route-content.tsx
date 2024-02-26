import Page from "~/components/layout/page";
import Quote from "./quote";

const RouteContent: React.FC<{
  quote: { author: string | null; title: string };
}> = ({ quote }) => {
  return (
    <Page.Body className="flex flex-col justify-center">
      <div className="sm:pb-[5vh] md:pb-[15vh] lg:pb-[20vh]">
        <Quote author={quote.author} title={quote.title} />
      </div>
    </Page.Body>
  );
};

export default RouteContent;
