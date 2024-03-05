import { Form, useNavigate } from "@remix-run/react";
import If from "~/components/if";
import Layout from "~/components/layout";
import H4 from "~/components/ui/typography/h4";
import P from "~/components/ui/typography/p";
import { TFormResponse, TMayBe } from "~/types";
import DeleteQuoteForm from "./components/delete-quote-form";
import { TData } from "./types";

const RouteContent: React.FC<{
  actionResponse?: TMayBe<TFormResponse<"quoteId" | "password">>;
  data?: TMayBe<TData>;
}> = ({ actionResponse, data }) => {
  const navigate = useNavigate();

  return (
    <Layout.Screen.Body>
      <section>
        <Layout>
          <Layout.Header>
            <header>
              <Layout.Header.Title>Delete quote</Layout.Header.Title>
            </header>
          </Layout.Header>
          <Layout.Body>
            <div className="border rounded p-6 bg-neutral-100 dark:bg-neutral-900">
              <H4>{data?.quote?.title}</H4>
              <If condition={(data?.quote?.author ?? "").length > 0}>
                <If.True>
                  <div className="text-neutral-500">
                    {" - "}
                    {data?.quote?.author}
                  </div>
                </If.True>
              </If>
            </div>
            <P className="mb-8">
              You are about to delete the above quote. Once a quote is deleted
              then it cannnot be restored back. <br />
              Are you sure you want to delete the quote?
            </P>
            <Form method="post">
              <DeleteQuoteForm
                fields={
                  actionResponse?.fields ?? {
                    quoteId: data?.quote?.id,
                    password: "",
                  }
                }
                errors={actionResponse?.errors}
                onCancel={() => {
                  navigate(-1);
                }}
              />
            </Form>
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
