import { useLoaderData } from "@remix-run/react";
import RouteContent from "./route-content";
import data from "./route-data";
import RouteError from "./route-error";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async () => {
  return await data();
};

export default function LoginRoute() {
  const quote = useLoaderData<typeof loader>();

  return <RouteContent quote={quote} />;
}
