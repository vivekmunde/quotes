import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

function withDefaultRouteData<TProps, TData>(
  Route: React.ComponentType<TProps & { data: TData }>,
  loader: (args: LoaderFunctionArgs) => Promise<TData>
): React.FC<TProps & { data: TData }> {
  const RouteDefault: React.FC<TProps & { data: TData }> = (props) => {
    const data = useLoaderData<typeof loader>();

    return <Route {...props} data={data as TData} />;
  };

  return RouteDefault;
}

export default withDefaultRouteData;
