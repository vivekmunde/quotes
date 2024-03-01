import { Await, useActionData, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import routeAction from "./route-action.server";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";
import RouteSkeleton from "./route-skeleton";

export const ErrorBoundary = RouteError;

export const loader = routeLoader;

export const action = routeAction;

export default function LoginRoute() {
  const { dataPromise } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <Suspense fallback={<RouteSkeleton />}>
      <Await resolve={dataPromise}>
        {(data) => (
          <RouteContent
            data={{ title: data.title, author: data.author }}
            fields={{
              loginId: actionData?.fields?.loginId?.toString(),
              password: actionData?.fields?.password?.toString(),
            }}
            errors={actionData?.errors}
          />
        )}
      </Await>
    </Suspense>
  );
}
