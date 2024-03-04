import { LoaderFunctionArgs, defer } from "@remix-run/node";
import { authorizedAccess } from "~/utils/server/auth";
import { db } from "~/utils/server/db.server";
import deferredResponse from "~/utils/server/delayed-promise.server";
import { TData } from "./types";

const getData = async (): Promise<TData> => {
  const quotes = await db.quotes.findMany({
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, author: true },
    take: 10,
  });

  return quotes;
};

const loader = async (args: LoaderFunctionArgs) => {
  return authorizedAccess(args.request, () =>
    defer({ dataPromise: deferredResponse(() => getData()) })
  );
};

export default loader;
