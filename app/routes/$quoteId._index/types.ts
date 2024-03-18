import { TMayBe, TRecordResponse } from "~/types";

export type TQuote = {
  title: string;
  author?: TMayBe<string>;
  urlSegment?: TMayBe<string>;
};

export type TNextQuote = { urlSegment: string };

export type TData = TRecordResponse<{ quote: TQuote; nextQuote: TNextQuote }>;
