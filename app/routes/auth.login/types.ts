import { TMayBe } from "~/types";

export type TData = TMayBe<{
  title: string;
  author: TMayBe<string>;
}>;
