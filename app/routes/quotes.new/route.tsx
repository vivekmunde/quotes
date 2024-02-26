import Body from "~/components/layout/body";
import Title from "~/components/layout/title";
import NewQuoteForm from "./new-quote-form";

export default function QuotesNewRoute() {
  return (
    <Body>
      <section>
        <header>
          <Title>Create new quote</Title>
        </header>
        <NewQuoteForm />
      </section>
    </Body>
  );
}
