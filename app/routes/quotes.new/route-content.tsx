import Page from "~/components/layout/page";
import QuoteForm, { TFormProps } from "~/components/quote-form";

const RouteContent: React.FC<TFormProps> = (props) => {
  return (
    <Page.Body>
      <section>
        <header>
          <Page.Title>Create new quote</Page.Title>
        </header>
        <form method="post">
          <QuoteForm {...props} />
        </form>
      </section>
    </Page.Body>
  );
};

export default RouteContent;
