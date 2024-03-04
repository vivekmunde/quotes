import { LoaderFunctionArgs, TypedDeferredData } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import DeferredRouteErrorBoundary from "../route-error/deferred-route-error-boundary";

function withDeferredRouteData<TProps, TData>(
  Route: React.ComponentType<TProps & { data: TData }>,
  RouteSkeleton: React.FC,
  RouteError: React.FC<{ error?: any }>,
  loader: (args: LoaderFunctionArgs) => Promise<
    TypedDeferredData<{
      dataPromise: Promise<TData>;
    }>
  >
): React.FC<TProps & { data: TData }> {
  const RouteDeferred: React.FC<TProps & { data: TData }> = (props) => {
    const { dataPromise } = useLoaderData<typeof loader>();

    return (
      <DeferredRouteErrorBoundary Fallback={RouteError}>
        <Suspense fallback={<RouteSkeleton />}>
          <Await resolve={dataPromise}>
            {(data) => <Route {...props} data={data as TData} />}
          </Await>
        </Suspense>
      </DeferredRouteErrorBoundary>
    );
  };

  return RouteDeferred;
}

export default withDeferredRouteData;
