import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import If from "~/components/if";
import { db } from "~/utils/db.server";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import RouteLoading from "./route-loading";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const quote = await db.quotes.findUnique({
    where: { id: params.quoteId },
    select: { id: true, author: true, title: true },
  });
  if (!quote) {
    throw new Error("Quote not found!");
  }
  return json({ quote });
};

export default function QuotesIndexRoute() {
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
