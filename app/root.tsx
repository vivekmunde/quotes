import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { RefreshCw } from "lucide-react";
import RouteError from "~/components/route-error";
import ThemeProvider from "~/components/theme-provider";
import { Button } from "~/components/ui/button";
import styles from "~/tailwind.css";
import RootProvider from "./components/RootProvider";
import { TRouteLoaderType } from "./types";
import { getUserPreferences } from "./utils/server/user-preferences";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const ErrorBoundary = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="px-4 grid grid-flow-col grid-cols-[repeat(24,1fr)]">
          <div className="flex flex-col h-screen col-[span_24] md:col-[3_/_span_20] lg:col-[4_/_span_18] xl:col-[5_/_span_16]">
            <div>
              <div className="flex flex-row justify-center p-6">
                <Link to="/q/@next" className="py-2">
                  <img alt="quotes" src="/quotes-q-logo.png" className="h-5" />
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <RouteError />
                <div className="pt-12">
                  <Link to="/q/@next">
                    <Button>
                      <RefreshCw className="text-lg mr-4" />
                      <span className="text-lg font-light">
                        Never mind! Let's reload and read!
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
};

export const loader = async (args: LoaderFunctionArgs) => {
  const routeLoaderType: TRouteLoaderType =
    Number(process.env.DEFER_LOADER_DELAY ?? 0) > 0 ? "Deferred" : "Default";
  const preferences = await getUserPreferences(args.request);

  return { preferences, routeLoaderType };
};

export default function App() {
  const { preferences, routeLoaderType } = useLoaderData<typeof loader>();

  return (
    <html lang="en" className={preferences.theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RootProvider routeLoaderType={routeLoaderType}>
          <ThemeProvider>
            <Outlet />
          </ThemeProvider>
        </RootProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
