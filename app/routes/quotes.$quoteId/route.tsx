import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import If from "~/components/if";
import authorizedAccess from "~/utils/server/auth/authorized-access.server";
import RouteContent from "./route-content";
import data from "./route-data.server";
import RouteError from "./route-error";
import RouteLoading from "./route-loading";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async (args: LoaderFunctionArgs) => {
  return authorizedAccess(args.request, () => data(args));
};

export default function QuoteRoute() {
  const navigation = useNavigation();
  const { quote } = useLoaderData<typeof loader>();

  return (
    <If condition={navigation.state === "loading"}>
      <If.True>
        <RouteLoading />
      </If.True>
      <If.False>
        <RouteContent quote={quote} />
      </If.False>
    </If>
  );
}
