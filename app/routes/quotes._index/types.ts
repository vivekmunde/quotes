import { TMayBe } from "~/types";

export type TData = TMayBe<
  {
    title: string;
    id: string;
    author: string | null;
  }[]
>;
