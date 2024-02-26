import { useLoaderData, useNavigation } from "@remix-run/react";
import If from "~/components/if";
import RouteError from "~/components/route-error";
import RouteContent from "./route-content";
import data from "./route-data";
import RouteLoading from "./route-loading";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async () => {
  return data();
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
