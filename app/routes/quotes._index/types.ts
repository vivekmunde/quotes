import { TGetResponse, TMayBe } from "~/types";

export type TData = TMayBe<
  TGetResponse<
    {
      title: string;
      id: string;
      author: string | null;
    }[]
  >
>;
