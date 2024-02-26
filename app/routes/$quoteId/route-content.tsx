import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import React from "react";
import Body from "~/components/layout/body";
import Footer from "~/components/layout/footer";
import { Button } from "~/components/ui/button";
import Quote from "./quote";

const RouteContent: React.FC<{
  quote: { author: string | null; title: string };
  nextQuote?: { id: string };
}> = ({ quote, nextQuote }) => {
  return (
    <React.Fragment>
      <Body className="flex flex-col justify-center">
        <div className="sm:pb-[5vh] md:pb-[15vh] lg:pb-[20vh]">
          <Quote author={quote.author} title={quote.title} />
        </div>
      </Body>
      <Footer>
        <div className="flex flex-row justify-end">
          <Link to={`/${nextQuote?.id}`}>
            <Button variant="outline" size="icon">
              <ThickArrowRightIcon />
            </Button>
          </Link>
        </div>
      </Footer>
    </React.Fragment>
  );
};

export default RouteContent;
