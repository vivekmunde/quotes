import { TMayBe } from "~/types";

export type TData = TMayBe<{
  quote?: { id: string; title: string; author?: TMayBe<string> };
}>;
