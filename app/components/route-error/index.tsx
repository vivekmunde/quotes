import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import React from "react";
import If from "~/components/if";
import RouteError404 from "./404";
import GenericRouteError from "./generic-route-error";

const RouteError: React.FC<{ error?: any }> = ({ error }) => {
  const routeError = useRouteError();

  const routeErrorStatus = isRouteErrorResponse(routeError)
    ? routeError?.status
    : error?.status;

  let message = error?.message;

  if (isRouteErrorResponse(routeError)) {
    try {
      message = routeError.data?.error;
    } catch (err: any) {
      message = routeError.data?.toString();
    }
  }

  return (
    <If condition={routeErrorStatus === 404}>
      <If.True>
        <RouteError404 message={message} />
      </If.True>
      <If.False>
        <GenericRouteError message={message} />
      </If.False>
    </If>
  );
};

export default RouteError;
