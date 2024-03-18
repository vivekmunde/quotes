import { useFetcher, useNavigate, useSearchParams } from "@remix-run/react";
import Layout from "~/components/layout";
import QuoteForm from "~/components/quote-form";
import RouteError404 from "~/components/route-error/404";
import { Input } from "~/components/ui/input";
import layoutStyles from "~/styles/layout";
import { TFormResponse, TMayBe } from "~/types";
import { TQuote } from "./types";

const RouteContent: React.FC<{
  quote?: TMayBe<TQuote>;
}> = ({ quote }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fetcher = useFetcher<TFormResponse<"author" | "title" | "otp">>();
  const fields = {
    author: fetcher.formData?.get("author") ?? quote?.author,
    title: fetcher.formData?.get("title") ?? quote?.title,
    otp: fetcher.formData?.get("otp"),
  };
  const errors = fetcher.data?.errors;

  return (
    <div className={layoutStyles.container.wrapper}>
      <div
        className={[
          layoutStyles.container.content,
          layoutStyles.body.base,
        ].join(" ")}
      >
        <section>
          <header className={layoutStyles.screen.header.base}>
            <Layout.Screen.Title className={layoutStyles.screen.title.base}>
              Update Quote
            </Layout.Screen.Title>
          </header>
          <div>
            {quote ? (
              <fetcher.Form method="post">
                <Input name="id" type="hidden" value={quote.id} />
                <QuoteForm
                  intent="update"
                  fields={fields}
                  errors={errors}
                  cancelUrl={searchParams.get("backTo")}
                  onCancel={() => {
                    navigate(-1);
                  }}
                  submitting={fetcher.state === "submitting"}
                />
              </fetcher.Form>
            ) : (
              <RouteError404 />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RouteContent;
