import { useFetcher, useNavigate, useSearchParams } from "@remix-run/react";
import React from "react";
import If from "~/components/if";
import Layout from "~/components/layout";
import RouteError404 from "~/components/route-error/404";
import H4 from "~/components/ui/typography/h4";
import P from "~/components/ui/typography/p";
import layoutStyles from "~/styles/layout";
import { TFormResponse, TMayBe } from "~/types";
import DeleteQuoteForm from "./components/delete-quote-form";
import { TQuote } from "./types";

const RouteContent: React.FC<{
  quote?: TMayBe<TQuote>;
}> = ({ quote }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fetcher = useFetcher<TFormResponse<"quoteId" | "password">>();
  const fields = {
    quoteId: fetcher.formData?.get("quoteId") ?? quote?.id,
    password: fetcher.formData?.get("password"),
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
              Delete quote
            </Layout.Screen.Title>
          </header>
          <div>
            {quote ? (
              <React.Fragment>
                <div className="border rounded p-6 bg-neutral-100 dark:bg-neutral-900">
                  <H4>{quote?.title}</H4>
                  <If condition={(quote?.author ?? "").length > 0}>
                    <If.True>
                      <div className="text-neutral-500">
                        {" - "}
                        {quote?.author}
                      </div>
                    </If.True>
                  </If>
                </div>
                <P className="mb-8">
                  You are about to delete the above quote. Once a quote is
                  deleted then it cannnot be restored back. <br />
                  Are you sure you want to delete the quote?
                </P>
                <fetcher.Form method="post">
                  <DeleteQuoteForm
                    fields={
                      fields ?? {
                        quoteId: quote?.id,
                        password: "",
                      }
                    }
                    errors={errors}
                    cancelUrl={searchParams.get("backTo")}
                    onCancel={() => {
                      navigate(-1);
                    }}
                    deleting={fetcher.state === "submitting"}
                  />
                </fetcher.Form>
              </React.Fragment>
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
