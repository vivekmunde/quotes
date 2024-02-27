import { ActionFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import RouteContent from "./route-content";
import { createNewQuote } from "./route-data";

export const action = async (args: ActionFunctionArgs) => {
  return createNewQuote(args);
};

export default function NewQuoteRoute() {
  const actionData = useActionData<typeof action>();

  return (
    <RouteContent
      fields={{
        title: actionData?.fields?.title?.toString(),
        author: actionData?.fields?.author?.toString(),
      }}
      errors={actionData?.errors}
    />
  );
}
