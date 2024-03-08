import { Form } from "@remix-run/react";
import { MessageCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Intent, Param } from "./search-param-hidden-inputs";

const NoQuoteFound: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div
        style={{ maxWidth: "600px" }}
        className="flex flex-col items-center gap-4 pt-[10vh] px-4 pb-4 text-center"
      >
        <MessageCircle className="h-16 w-16" />
        <div className="text-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded">
          Success is not final, failure is not fatal, it's the courage to
          continue that counts.{" "}
          <span className="text-neutral-500 text-base">
            - Winston S. Churchill
          </span>
        </div>
        <div>
          We could not find any matching quotes. Please change the search
          criteria.
        </div>
        <div>OR</div>
        <div>
          <Form method="get">
            <Intent intent="q" />
            <Param param="q" value="" />
            <Param param="page" value="0" />
            <Param param="size" />
            <Button type="submit" variant="outline">
              Clear Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NoQuoteFound;
