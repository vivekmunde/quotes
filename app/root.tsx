import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import ThemeProvider from "~/components/theme-provider";
import styles from "~/tailwind.css";
import RootProvider from "./components/RootProvider";
import { TRouteLoaderType } from "./types";
import { getUserPreferences } from "./utils/server/user-preferences";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

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
