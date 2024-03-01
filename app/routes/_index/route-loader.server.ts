import { redirect } from "@remix-run/node";
import getRandomQuote from "~/data/get-random-quote.server";
import { TData } from "./types";

const getData = async (): Promise<TData> => {
  const quote = await getRandomQuote();
  return redirect(`/${quote.id}`);
};

const loader = async () => {
  return getData();
};

export default loader;
