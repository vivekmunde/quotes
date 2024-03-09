import { LoaderFunctionArgs, defer } from "@remix-run/node";
import { TDeferredRecordsResponse, TMayBe } from "~/types";
import { authorizedAccess } from "~/utils/server/auth";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";
import { TQuote } from "./types";

const getTotal = async ({ searchWords }: { searchWords: string[] }) =>
  await db.quotes.count({
    where:
      searchWords.length > 0
        ? {
            OR: [
              ...searchWords.map((it) => ({ author: { contains: it } })),
              ...searchWords.map((it) => ({ title: { contains: it } })),
            ],
          }
        : undefined,
  });

const getQuotes = async ({
  page,
  size,
  searchWords,
}: {
  page: number;
  size: number;
  searchWords: string[];
}) =>
  await db.quotes.findMany({
    where:
      searchWords.length > 0
        ? {
            OR: [
              ...searchWords.map((it) => ({ author: { contains: it } })),
              ...searchWords.map((it) => ({ title: { contains: it } })),
            ],
          }
        : undefined,
    skip: page * size,
    take: size,
    select: { id: true, title: true, author: true },
    orderBy: { updatedAt: "desc" },
  });

const getSafePaginatedQuotes = async ({
  page,
  size,
  searchWords,
  matchExact,
}: {
  page: number;
  size: number;
  searchWords: string[];
  matchExact: boolean;
}) => {
  return new Promise<{
    total: number;
    items: { id: string; title: string; author: TMayBe<string> }[];
    page: number;
  }>(async (resolve) => {
    let _pageNumber = page;

    let [total, items] = await Promise.all([
      getTotal({ searchWords }),
      getQuotes({ page, size, searchWords }),
    ]);

    if (total > 0 && page * size >= total) {
      _pageNumber = Math.floor(total / size) + (total % size > 0 ? 1 : 0) - 1;

      items = await getQuotes({
        page: _pageNumber,
        size,
        searchWords,
      });
    } else {
      _pageNumber = 0;
    }

    return resolve({ total, items, page: _pageNumber });
  });
};

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

  const matchExact = q.startsWith("exact:");
  const _q = (matchExact ? q.replace("exact:", "") : q).trim();
  const searchWords = matchExact ? [_q] : _q.split(" ");

  const paginated = getSafePaginatedQuotes({
    page: _pageNumber,
    size: _pageSize,
    searchWords,
    matchExact,
  });

  const response: TDeferredRecordsResponse<TQuote> = {
    items: paginated.then(({ items }) => items),
    total: paginated.then(({ total }) => total),
    page: _pageNumber,
    size: _pageSize,
  };

  return defer(response);
};

const loader = async (args: LoaderFunctionArgs) => {
  return authorizedAccess(args.request, async () => await getData(args));
};

export default loader;
