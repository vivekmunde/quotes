import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  defer,
  redirect,
} from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import isLoggedIn from "~/utils/server/auth/is-logged-in.server";
import RouteContent from "./route-content";
import { getQuote, login } from "./route-data.server";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async (args: LoaderFunctionArgs) => {
  if (!isLoggedIn(args.request)) {
    const { searchParams } = new URL(args.request.url);
    const redirectTo = searchParams.get("redirectTo");

    return redirect(redirectTo ?? "/quotes");
  }

  return defer({
    quotePromise: getQuote(),
  });
};

export const action = async (args: ActionFunctionArgs) => {
  return login(args);
};

export default function LoginRoute() {
  const { quotePromise } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <RouteContent
      quotePromise={quotePromise}
      fields={{
        loginId: actionData?.fields?.loginId?.toString(),
        password: actionData?.fields?.password?.toString(),
      }}
      errors={actionData?.errors}
    />
  );
}
