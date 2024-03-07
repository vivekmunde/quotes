import { TMayBe } from "~/types";

export type TData = TMayBe<{
  quote: TMayBe<{ title: string; author: string | null }>;
  nextQuote: TMayBe<{ id: string }>;
}>;
