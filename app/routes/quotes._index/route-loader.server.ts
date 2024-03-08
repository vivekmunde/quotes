import { LoaderFunctionArgs, defer } from "@remix-run/node";
import { TDeferredRecordsResponse } from "~/types";
import { authorizedAccess } from "~/utils/server/auth";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";
import { TQuote } from "./types";

const getData = async ({ request }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const pageNumber = searchParams.get("page") ?? "0";
  const pageSize = searchParams.get("size") ?? "10";

  const _pageNumber = Math.max(Number(pageNumber), 0);
  const _pageSize = Number(pageSize) > 0 ? Number(pageSize) : 10;

  if (typeof _pageNumber !== "number" || Number.isNaN(_pageNumber)) {
    throw badRequest("Page should be a number!");
  }

  if (typeof _pageSize !== "number" || Number.isNaN(_pageSize)) {
    throw badRequest("Page size should be a number!");
  }

  const wordsToSearch = q.split(" ");

  const getTotal = async () =>
    db.quotes.count({
      where:
        wordsToSearch.length > 0
          ? {
              OR: [
                ...wordsToSearch.map((it) => ({ author: { contains: it } })),
                ...wordsToSearch.map((it) => ({ title: { contains: it } })),
              ],
            }
          : undefined,
    });

  const getQuotes = async () =>
    db.quotes.findMany({
      where:
        wordsToSearch.length > 0
          ? {
              OR: [
                ...wordsToSearch.map((it) => ({ author: { contains: it } })),
                ...wordsToSearch.map((it) => ({ title: { contains: it } })),
              ],
            }
          : undefined,
      skip: _pageNumber * _pageSize,
      take: _pageSize,
      select: { id: true, title: true, author: true },
      orderBy: { updatedAt: "desc" },
    });

  const response: TDeferredRecordsResponse<TQuote> = {
    items: getQuotes(),
    total: getTotal(),
    page: _pageNumber,
    size: _pageSize,
  };

  return defer(response);
};

const loader = async (args: LoaderFunctionArgs) => {
  return authorizedAccess(args.request, async () => await getData(args));
};

export default loader;
