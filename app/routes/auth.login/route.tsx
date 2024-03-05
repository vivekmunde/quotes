import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import withDecideRouteType from "~/components/route/with-decide-route-type";
import withRouteAction from "~/components/route/with-route-action";
import { decideLoaderType } from "~/utils/route";
import { isLoggedIn } from "~/utils/server/auth";
import routeAction from "./route-action.server";
import RouteDefault, { loader as defaultLoader } from "./route-default";
import RouteDeferred, { loader as deferredLoader } from "./route-deferred";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export const loader = async (args: LoaderFunctionArgs) => {
  const _isLoggedIn = await isLoggedIn(args.request);
  if (_isLoggedIn) {
    const { searchParams } = new URL(args.request.url);
    const redirectTo = searchParams.get("redirectTo") ?? "";

    return redirect(redirectTo.length > 0 ? redirectTo : "/quotes");
  } else {
    return decideLoaderType(defaultLoader, deferredLoader)(args);
  }
};

export const action = routeAction;

export default withRouteAction(
  withDecideRouteType(RouteDefault, RouteDeferred),
  action
);
