import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import If from "~/components/if";
import RouteContent from "./route-content";
import data from "./route-data";
import RouteError from "./route-error";
import RouteLoading from "./route-loading";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async (args: LoaderFunctionArgs) => {
  return data(args);
};

export default function QuotesIndexRoute() {
  const navigation = useNavigation();
  const { quote, nextQuotePromise } = useLoaderData<typeof loader>();

  return (
    <If condition={navigation.state === "loading"}>
      <If.True>
        <RouteLoading />
      </If.True>
      <If.False>
        <RouteContent quote={quote} nextQuotePromise={nextQuotePromise} />
      </If.False>
    </If>
  );
}
