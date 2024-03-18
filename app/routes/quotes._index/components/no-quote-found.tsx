import { Form, Link, useLocation } from "@remix-run/react";
import { ListPlus, MessageCircle, Quote, UploadCloud } from "lucide-react";
import If from "~/components/if";
import { Button } from "~/components/ui/button";
import { Intent, Param } from "./search-param-hidden-inputs";
import useGetSearchParam from "./use-get-search-param";
import useIsIntent from "./use-is-intent";
import useIsLoading from "./use-is-loading";

const NoQuoteFound: React.FC = () => {
  const location = useLocation();
  const backToUrl = encodeURIComponent(
    [location.pathname, location.search, location.hash].join("")
  );
  const isIntentSearch = useIsIntent()("q");
  const q = useGetSearchParam()("q");
  const isLoading = useIsLoading()();

  return (
    <div className="flex flex-row items-center justify-center">
      <div
        style={{ maxWidth: "600px" }}
        className="flex flex-col items-center gap-4 pt-[10vh] px-4 pb-4 text-center"
      >
        <If condition={q.length > 0}>
          <If.True>
            <MessageCircle className="h-16 w-16" />
            <div className="text-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded">
              Success is not final, failure is not fatal, it's the courage to
              continue that counts.{" "}
              <span className="text-neutral-500 text-base">
                - Winston S. Churchill
              </span>
            </div>
            <div>
              We could not find any matching quotes. Keep searching amazing
              quotes.
            </div>
            <div className="text-neutral-500">OR</div>
            <div>
              <Form method="get">
                <Intent intent="q" />
                <Param param="q" value="" />
                <Param param="page" value="0" />
                <Param param="size" />
                <Button
                  type="submit"
                  variant="outline"
                  loading={isIntentSearch && isLoading}
                >
                  Clear Search
                </Button>
              </Form>
            </div>
          </If.True>
          <If.False>
            <Quote className="h-16 w-16" />
            <div className="text-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded">
              Life is about the journey, not the destination. And the destiny is
              nothing but a life long journey!
            </div>
            <div className="flex flex-row gap-4 items-center pt-10">
              <Link prefetch="render" to={`/quotes/create?backTo=${backToUrl}`}>
                <Button className="w-[240px]">
                  <ListPlus className="mr-3" />
                  <span>Create your first Quote</span>
                </Button>
              </Link>
              <div className="text-neutral-500">OR</div>
              <Link prefetch="render" to={`/quotes/upload?backTo=${backToUrl}`}>
                <Button className="w-[240px]">
                  <UploadCloud className="mr-3" />
                  <span>Upload your first Quotes</span>
                </Button>
              </Link>
            </div>
          </If.False>
        </If>
      </div>
    </div>
  );
};

export default NoQuoteFound;
