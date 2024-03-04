export type TMayBe<T> = T | undefined | null;

export type TFormResponse<TFields extends string> = {
  fields: Record<TFields, TMayBe<FormDataEntryValue>>;
  errors?: TMayBe<{
    fields?: Record<TFields, TMayBe<string>>;
    message?: TMayBe<string>;
  }>;
};

export type TResponseError = {
  message: string;
  status: number;
};

export type TRouteType = "Default" | "Deferred";
