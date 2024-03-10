import { TMayBe } from "~/types";
import { TQuery } from "./types";

export const getSearchWords = (q: TMayBe<string>): TQuery => {
  if (q) {
    const matchExact = q.startsWith("exact:");
    const _q = (matchExact ? q.replace("exact:", "") : q).trim();
    const searchWords = matchExact ? [_q] : _q.split(" ");

    return { words: searchWords, exact: matchExact };
  }

  return { words: [], exact: false };
};
