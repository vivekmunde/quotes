import { ActionFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import RouteContent from "./route-content";
import { getQuote, login } from "./route-data";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async () => {
  return await getQuote();
};

export const action = async (args: ActionFunctionArgs) => {
  return login(args);
};

export default function LoginRoute() {
  const quote = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <RouteContent
      quote={quote}
      fields={{
        loginId: actionData?.fields?.loginId?.toString(),
        password: actionData?.fields?.password?.toString(),
      }}
      errors={actionData?.errors}
    />
  );
}
