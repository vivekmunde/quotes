import Page from "~/components/layout/page";
import NewQuoteForm from "./new-quote-form";

export default function NewQuotesRoute() {
  return (
    <Page.Body>
      <section>
        <header>
          <Page.Title>Create new quote</Page.Title>
        </header>
        <NewQuoteForm />
      </section>
    </Page.Body>
  );
}
