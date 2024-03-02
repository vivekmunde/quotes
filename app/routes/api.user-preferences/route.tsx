import { Outlet } from "@remix-run/react";
import routeAction from "./route-action.server";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export const action = routeAction;

export default function Route() {
  return <Outlet />;
}
