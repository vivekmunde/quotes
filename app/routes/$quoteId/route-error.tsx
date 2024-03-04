import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import React from "react";
import If from "~/components/if";
import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";
import RouteError404 from "~/components/route-error/404";

const RouteError: React.FC = () => {
  const error = useRouteError();
  const routeErrorStatus = isRouteErrorResponse(error)
    ? error?.status
    : undefined;

  return (
    <Layout.Screen>
      <Layout.Screen.Body>
        <If condition={routeErrorStatus === 404}>
          <If.True>
            <RouteError404
              title="Yeh! Life is not fair!"
              message="The quote your are looking for might have been removed or never did exist!"
            />
          </If.True>
          <If.False>
            <CommonRouteError />
          </If.False>
        </If>
      </Layout.Screen.Body>
    </Layout.Screen>
  );
};

export default RouteError;
