import { TMayBe, TRecordResponse } from "~/types";

export type TQuote = { title: string; author?: TMayBe<string> };

export type TNextQuote = { id: string };

export type TData = TRecordResponse<{ quote: TQuote; nextQuote: TNextQuote }>;
