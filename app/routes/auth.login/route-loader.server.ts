import { LoaderFunctionArgs, defer, redirect } from "@remix-run/node";
import getRandomQuote from "~/api/get-random-quote.server";
import { isLoggedIn } from "~/utils/server/auth";
import deferredResponse from "~/utils/server/delayed-promise.server";
import { TData } from "./types";

const getData = async (): Promise<TData> => {
  return getRandomQuote({ select: { title: true, author: true } });
};

const loader = async (args: LoaderFunctionArgs) => {
  const _isLoggedIn = await isLoggedIn(args.request);
  if (_isLoggedIn) {
    const { searchParams } = new URL(args.request.url);
    const redirectTo = searchParams.get("redirectTo");

    return redirect(redirectTo ?? "/quotes");
  } else {
    return defer({ dataPromise: deferredResponse(() => getData()) });
  }
};

export default loader;
