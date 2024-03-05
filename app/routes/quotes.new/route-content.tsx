import { Form, useNavigate } from "@remix-run/react";
import Layout from "~/components/layout";
import QuoteForm from "~/components/quote-form";
import { TFormResponse, TMayBe } from "~/types";

const RouteContent: React.FC<{
  actionResponse?: TMayBe<TFormResponse<"author" | "title">>;
}> = ({ actionResponse }) => {
  const navigate = useNavigate();

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
            <Form method="post">
              <QuoteForm
                intent="create"
                fields={
                  actionResponse?.fields ?? {
                    author: undefined,
                    title: undefined,
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
