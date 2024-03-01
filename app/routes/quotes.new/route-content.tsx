import Layout from "~/components/layout";
import QuoteForm, { TFormProps } from "~/components/quote-form";

const RouteContent: React.FC<TFormProps> = (props) => {
  return (
    <Layout.Body>
      <section>
        <header>
          <Layout.Title>Create new quote</Layout.Title>
        </header>
        <form method="post">
          <QuoteForm {...props} />
        </form>
      </section>
    </Layout.Body>
  );
};

export default RouteContent;
