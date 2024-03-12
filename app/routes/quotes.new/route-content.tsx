import { useFetcher, useNavigate } from "@remix-run/react";
import Layout from "~/components/layout";
import QuoteForm from "~/components/quote-form";
import { TFormResponse } from "~/types";

const RouteContent: React.FC<{}> = () => {
  const navigate = useNavigate();
  const fetcher = useFetcher<TFormResponse<"author" | "title">>();
  const fields = {
    author: fetcher.formData?.get("author"),
    title: fetcher.formData?.get("title"),
  };
  const errors = fetcher.data?.errors;

  return (
    <Layout.Screen.Body>
      <section>
        <Layout>
          <Layout.Header>
            <header>
              <Layout.Header.Title>Create new quote</Layout.Header.Title>
            </header>
          </Layout.Header>
          <Layout.Body>
            <fetcher.Form method="post">
              <QuoteForm
                intent="create"
                fields={fields}
                errors={errors}
                onCancel={() => {
                  navigate(-1);
                }}
                submitting={fetcher.state === "submitting"}
              />
            </fetcher.Form>
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
