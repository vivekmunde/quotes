import { TDeferredRecordsResponse, TMayBe } from "~/types";

export type TQuote = {
  title: string;
  id: string;
  author: TMayBe<string>;
};

export type TData = TDeferredRecordsResponse<TQuote>;
