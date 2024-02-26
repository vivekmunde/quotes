import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";
import If from "~/components/if";
import Header from "~/components/layout/header";
import Page from "~/components/layout/page";
import RouteError from "~/components/route-error";
import data from "./route-data";
import RouteLoading from "./route-loading";

export const meta: MetaFunction = () => {
  return [
    { title: "Quotes" },
    { name: "Quotes", content: "Welcome to Quotes!" },
  ];
};

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async () => {
  const nextQuote = await data();
  return redirect(`/${nextQuote.id}`);
};

export default function IndexRoute() {
  const navigation = useNavigation();

  return (
    <Page>
      <Header />
      <If condition={navigation.state === "loading"}>
        <If.True>
          <RouteLoading />
        </If.True>
      </If>
    </Page>
  );
}
