import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import React from "react";
import If from "~/components/if";
import RouteError404 from "./404";
import GenericRouteError from "./generic-route-error";

const DefaultRouteError: React.FC<{ title?: string; message?: string }> = ({
  title,
  message,
}) => {
  const error = useRouteError();
  const routeErrorStatus = isRouteErrorResponse(error)
    ? error?.status
    : undefined;
  const routeErrorMessage = isRouteErrorResponse(error)
    ? error?.data?.toString()
    : undefined;
  const _message = message ?? routeErrorMessage;

  return (
    <If condition={routeErrorStatus === 404}>
      <If.True>
        <RouteError404 title="Not found!" message={_message} />
      </If.True>
      <If.False>
        <GenericRouteError title={title} message={_message} />
      </If.False>
    </If>
  );
};

export default DefaultRouteError;
