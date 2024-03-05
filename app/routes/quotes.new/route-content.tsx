import Layout from "~/components/layout";
import QuoteForm from "~/components/quote-form";
import { TFormResponse, TMayBe } from "~/types";

const RouteContent: React.FC<{
  actionResponse?: TMayBe<TFormResponse<"author" | "title">>;
}> = ({ actionResponse }) => {
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
            <form method="post">
              <QuoteForm
                fields={
                  actionResponse?.fields ?? {
                    author: undefined,
                    title: undefined,
                  }
                }
                errors={actionResponse?.errors}
              />
            </form>
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
