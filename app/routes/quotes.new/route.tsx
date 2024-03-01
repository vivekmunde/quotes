import { Await, useActionData, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import routeAction from "./route-action.server";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";
import RouteSkeleton from "./route-skeleton";

export const ErrorBoundary = RouteError;

export const action = routeAction;

export const loader = routeLoader;

export default function NewQuoteRoute() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <Suspense fallback={<RouteSkeleton />}>
      <Await resolve={data}>
        {() => (
          <RouteContent
            fields={{
              title: actionData?.fields?.title?.toString(),
              author: actionData?.fields?.author?.toString(),
            }}
            errors={actionData?.errors}
          />
        )}
      </Await>
    </Suspense>
  );
}
