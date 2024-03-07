import { Form, useNavigate } from "@remix-run/react";
import Layout from "~/components/layout";
import QuoteForm from "~/components/quote-form";
import RouteError404 from "~/components/route-error/404";
import { Input } from "~/components/ui/input";
import { TFormResponse, TMayBe } from "~/types";
import { TData } from "./types";

const RouteContent: React.FC<{
  actionResponse?: TMayBe<TFormResponse<"author" | "title">>;
  data?: TMayBe<TData>;
}> = ({ actionResponse, data }) => {
  const navigate = useNavigate();

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
            {data?.quote ? (
              <Form method="post">
                <Input name="id" type="hidden" value={data.quote.id} />
                <QuoteForm
                  intent="update"
                  fields={
                    actionResponse?.fields ?? {
                      author: data.quote.author,
                      title: data.quote.title,
                    }
                  }
                  errors={actionResponse?.errors}
                  onCancel={() => {
                    navigate(-1);
                  }}
                />
              </Form>
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
