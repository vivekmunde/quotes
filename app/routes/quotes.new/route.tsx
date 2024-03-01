import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import authorizedAccess from "~/utils/server/auth/authorized-access.server";
import RouteContent from "./route-content";
import { createNewQuote } from "./route-data.server";

export const action = async (args: ActionFunctionArgs) => {
  return authorizedAccess(args.request, () => createNewQuote(args));
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return authorizedAccess<null>(request, () => null);
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
