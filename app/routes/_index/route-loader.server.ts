import { redirect } from "@remix-run/node";
import getRandomQuote from "~/api/get-random-quote.server";
import { TData } from "./types";

const getData = async (): Promise<TData> => {
  const quote = await getRandomQuote();
  return redirect(`/${quote.urlSegment}`);
};

const loader = async () => {
  return getData();
};

export default loader;
