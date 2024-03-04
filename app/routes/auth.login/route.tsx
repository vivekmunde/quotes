import { useActionData } from "@remix-run/react";
import withDecideRouteType from "~/components/route/with-decide-route-type";
import { decideLoaderType } from "~/utils/route";
import routeAction from "./route-action.server";
import RouteDefault, { loader as defaultLoader } from "./route-default";
import RouteDeferred, { loader as deferredLoader } from "./route-deferred";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export const loader = decideLoaderType(defaultLoader, deferredLoader);

export const action = routeAction;

const RouteAsPerLoaderType = withDecideRouteType(RouteDefault, RouteDeferred);

export default function Route() {
  const actionData = useActionData<typeof action>();

  return (
    <RouteAsPerLoaderType
      fields={{
        loginId: actionData?.fields?.loginId?.toString(),
        password: actionData?.fields?.password?.toString(),
      }}
      errors={actionData?.errors}
    />
  );
}
