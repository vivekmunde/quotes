import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import getRandomQuote from "~/api/get-random-quote.server";
import { isLoggedIn } from "~/utils/server/auth";
import { TData } from "./types";

const getData = async () => {
  return getRandomQuote({ select: { title: true, author: true } });
};

const loader = async (args: LoaderFunctionArgs) => {
  const _isLoggedIn = await isLoggedIn(args.request);
  if (_isLoggedIn) {
    const { searchParams } = new URL(args.request.url);
    const redirectTo = searchParams.get("redirectTo") ?? "";

    return redirect(redirectTo.length > 0 ? redirectTo : "/quotes");
  } else {
    const quote = await getData();

    const response: TData = { item: quote };

    return json(response);
  }
};

export default loader;
