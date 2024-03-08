import { TMayBe, TRecordResponse } from "~/types";

export type TQuote = { id: string; title: string; author: TMayBe<string> };

export type TData = TRecordResponse<TQuote>;
