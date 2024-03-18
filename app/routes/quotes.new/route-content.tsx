import { useFetcher, useNavigate, useSearchParams } from "@remix-run/react";
import Layout from "~/components/layout";
import QuoteForm from "~/components/quote-form";
import layoutStyles from "~/styles/layout";
import { TFormResponse } from "~/types";

const RouteContent: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fetcher = useFetcher<TFormResponse<"author" | "title" | "otp">>();
  const fields = {
    author: fetcher.formData?.get("author"),
    title: fetcher.formData?.get("title"),
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
              Create quote
            </Layout.Screen.Title>
          </header>
          <div>
            <fetcher.Form method="post">
              <QuoteForm
                intent="create"
                fields={fields}
                errors={errors}
                cancelUrl={searchParams.get("backTo")}
                onCancel={() => {
                  navigate(-1);
                }}
                submitting={fetcher.state === "submitting"}
              />
            </fetcher.Form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RouteContent;
