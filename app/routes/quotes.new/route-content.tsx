import Layout from "~/components/layout";
import QuoteForm, { TFormProps } from "~/components/quote-form";

const RouteContent: React.FC<TFormProps> = (props) => {
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
              <QuoteForm {...props} />
            </form>
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
