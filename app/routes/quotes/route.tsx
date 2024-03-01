import { LoaderFunctionArgs } from "@remix-run/node";
import authorizedAccess from "~/utils/server/auth/authorized-access.server";
import RouteContent from "./route-content";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return authorizedAccess<null>(request, () => null);
};

export default function QuotesLayoutRoute() {
  return <RouteContent />;
}
