import { Link, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { ChevronLeft } from "lucide-react";
import React from "react";
import If from "~/components/if";
import Layout from "~/components/layout";
import RouteError404 from "~/components/route-error/404";
import DefaultRouteError from "~/components/route-error/default-route-error";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

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
          </If.True>
          <If.False>
            <DefaultRouteError />
          </If.False>
        </If>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/quotes">
                <Button variant="outline" icon>
                  <ChevronLeft />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <div>Quotes</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Layout.Screen.Footer>
    </React.Fragment>
  );
};

export default RouteError;
