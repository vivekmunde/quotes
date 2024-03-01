import { TMayBe } from "~/types";

export type TData = {
  title: string;
  author: TMayBe<string>;
};
