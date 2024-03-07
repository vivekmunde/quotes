import { TMayBe } from "~/types";

export type TData = TMayBe<{
  quote: TMayBe<{ id: string; title: string; author?: TMayBe<string> }>;
}>;
