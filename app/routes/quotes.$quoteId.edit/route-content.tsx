import { useFetcher, useNavigate } from "@remix-run/react";
import Layout from "~/components/layout";
import QuoteForm from "~/components/quote-form";
import RouteError404 from "~/components/route-error/404";
import { Input } from "~/components/ui/input";
import { TFormResponse, TMayBe } from "~/types";
import { TQuote } from "./types";

const RouteContent: React.FC<{
  quote?: TMayBe<TQuote>;
}> = ({ quote }) => {
  const navigate = useNavigate();
  const fetcher = useFetcher<TFormResponse<"author" | "title">>();
  const fields = {
    author: fetcher.formData?.get("author") ?? quote?.author,
    title: fetcher.formData?.get("title") ?? quote?.title,
  };
  const errors = fetcher.data?.errors;

  return (
    <Layout.Screen.Body>
      <section>
        <Layout>
          <Layout.Header>
            <header>
              <Layout.Header.Title>Update quote</Layout.Header.Title>
            </header>
          </Layout.Header>
          <Layout.Body>
            {quote ? (
              <fetcher.Form method="post">
                <Input name="id" type="hidden" value={quote.id} />
                <QuoteForm
                  intent="update"
                  fields={fields}
                  errors={errors}
                  onCancel={() => {
                    navigate(-1);
                  }}
                  submitting={fetcher.state === "submitting"}
                />
              </fetcher.Form>
            ) : (
              <RouteError404 />
            )}
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
