import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import If from "~/components/if";
import RouteError from "~/components/route-error";
import authorizedAccess from "~/utils/server/auth/authorized-access.server";
import RouteContent from "./route-content";
import data from "./route-data.server";
import RouteLoading from "./route-loading";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return authorizedAccess(request, data);
};

export default function QuotesIndexRoute() {
  const navigation = useNavigation();
  const { quotes } = useLoaderData<typeof loader>();

  return (
    <If condition={navigation.state === "loading"}>
      <If.True>
        <RouteLoading />
      </If.True>
      <If.False>
        <RouteContent quotes={quotes} />
      </If.False>
    </If>
  );
}
