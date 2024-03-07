import { TMayBe } from "~/types";

export type TQuote = { id: string; title: string; author?: TMayBe<string> };

export type TData = TMayBe<{
  quote: TMayBe<TQuote>;
}>;
