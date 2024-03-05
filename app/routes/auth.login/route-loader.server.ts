import getRandomQuote from "~/api/get-random-quote.server";
import { TData } from "./types";

const getData = async (): Promise<TData> => {
  return getRandomQuote({ select: { title: true, author: true } });
};

const loader = async () => {
  return await getData();
};

export default loader;
