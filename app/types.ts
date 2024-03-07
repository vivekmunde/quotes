export type TMayBe<T> = T | undefined | null;

export type TFormResponse<TFields extends string> = {
  fields: Record<TFields, TMayBe<FormDataEntryValue>>;
  errors?: TMayBe<{
    fields?: Partial<Record<TFields, TMayBe<string>>>;
    message?: TMayBe<string>;
  }>;
};

export type TGetResponse<TData> = {
  data?: TData;
  total?: TMayBe<number>;
  pageNumber?: TMayBe<number>;
  pageSize?: TMayBe<number>;
  error?: TMayBe<string>;
};

export type TResponseError = {
  message: string;
  status: number;
};

export type TRouteLoaderType = "Default" | "Deferred";

export type TError = {
  status?: TMayBe<number>;
  statusText?: TMayBe<string>;
  message?: TMayBe<string>;
};
