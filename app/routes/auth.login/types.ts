import { TMayBe, TRecordResponse } from "~/types";

export type TQuote = { title: string; author?: TMayBe<string> };

export type TData = TRecordResponse<TQuote>;
