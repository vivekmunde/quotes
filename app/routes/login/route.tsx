import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { isLoggedIn } from "~/utils/session.server";
import RouteContent from "./route-content";
import { getQuote, login } from "./route-data";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (isLoggedIn(request)) {
    const { searchParams } = new URL(request.url);
    const redirectTo = searchParams.get("redirectTo");

    return redirect(redirectTo ?? "/quotes");
  }

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
