import { ActionFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import Page from "~/components/layout/page";
import QuoteForm from "./quote-form";
import createNewQuote from "./route-data";

export const action = async (args: ActionFunctionArgs) => {
  return createNewQuote(args);
};

export default function NewQuoteRoute() {
  const actionData = useActionData<typeof action>();

  return (
    <Page.Body>
      <section>
        <header>
          <Page.Title>Create new quote</Page.Title>
        </header>
        <QuoteForm
          fields={{
            title: actionData?.fields?.title?.toString(),
            author: actionData?.fields?.author?.toString(),
          }}
          errors={actionData?.errors}
        />
      </section>
    </Page.Body>
  );
}
