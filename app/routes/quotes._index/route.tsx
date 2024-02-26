import { json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import If from "~/components/if";
import RouteError from "~/components/route-error";
import { db } from "~/utils/db.server";
import RouteContent from "./route-content";
import RouteLoading from "./route-loading";

export function ErrorBoundary() {
  return <RouteError />;
}

export const loader = async () => {
  const quotes = await db.quotes.findMany({
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, author: true },
    take: 10,
  });

  return json({ quotes });
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
