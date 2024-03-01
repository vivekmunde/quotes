import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  TypedResponse,
  redirect,
} from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { TMayBe } from "~/types";
import isLoggedIn from "~/utils/server/auth/is-logged-in.server";
import RouteContent from "./route-content";
import { getQuote, login } from "./route-data";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

const ifNotLoggedIn = async <T,>(
  args: LoaderFunctionArgs,
  fn: (args: LoaderFunctionArgs) => Promise<TypedResponse<never> | T>
): Promise<TypedResponse<never> | T> => {
  if (!isLoggedIn(args.request)) {
    const { searchParams } = new URL(args.request.url);
    const redirectTo = searchParams.get("redirectTo");

    return redirect(redirectTo ?? "/quotes");
  }

  return fn(args);
};

export const loader = async (args: LoaderFunctionArgs) => {
  return ifNotLoggedIn<{
    title: string;
    author: TMayBe<string>;
    id: string;
  }>(args, async () => {
    return await getQuote();
  });
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
