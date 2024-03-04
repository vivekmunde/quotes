import { Link, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import If from "~/components/if";
import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";
import RouteError404 from "~/components/route-error/404";
import { Button } from "~/components/ui/button";

const RouteError: React.FC<{ error?: any }> = ({ error }) => {
  const routeError = useRouteError();
  const routeErrorStatus = isRouteErrorResponse(routeError)
    ? routeError?.status
    : error?.status;

  return (
    <React.Fragment>
      <Layout.Screen.Body>
        <If condition={routeErrorStatus === 404}>
          <If.True>
            <RouteError404
              title="Yeh! Life is not fair!"
              message="The quote your are looking for might have been removed or never did exist!"
            />
            <div className="flex flex-row justify-center mt-6">
              <Link to="/q/@next">
                <Button variant="outline">
                  <span className="mr-2">
                    Never mind! Let's read some other quote.
                  </span>
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </If.True>
          <If.False>
            <CommonRouteError />
          </If.False>
        </If>
      </Layout.Screen.Body>
    </React.Fragment>
  );
};

export default RouteError;
