import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import If from "~/components/if";
import Header from "~/components/layout/header";
import Page from "~/components/layout/page";
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
  const { quote, nextQuote } = useLoaderData<typeof loader>();

  return (
    <Page>
      <Header />
      <If condition={navigation.state === "loading"}>
        <If.True>
          <RouteLoading />
        </If.True>
        <If.False>
          {quote && <RouteContent quote={quote} nextQuote={nextQuote.data} />}
        </If.False>
      </If>
    </Page>
  );
}
