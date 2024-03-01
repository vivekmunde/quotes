import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";
import If from "~/components/if";
import RouteError from "~/components/route-error";
import RouteContent from "./route-content";
import data from "./route-data.server";
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
    <If condition={navigation.state !== "loading"}>
      <If.True>
        <RouteLoading />
      </If.True>
      <If.False>
        <RouteContent />
      </If.False>
    </If>
  );
}
