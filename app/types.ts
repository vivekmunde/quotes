export type TMayBe<T> = T | undefined | null;

export type TFormResponse<TFields extends string> = {
  fields: Record<TFields, TMayBe<FormDataEntryValue>>;
  errors?: TMayBe<{
    fields?: Partial<Record<TFields, TMayBe<string>>>;
    message?: TMayBe<string>;
  }>;
};

export type TRecordResponse<TRecord> = {
  item?: TMayBe<TRecord>;
  error?: TMayBe<string>;
};

export type TDeferredRecordResponse<TRecord> = {
  item?: TMayBe<Promise<TMayBe<TRecord>>>;
  error?: TMayBe<string>;
};

export type TRecordsResponse<TRecord> = {
  items?: TMayBe<TRecord[]>;
  total?: TMayBe<number>;
  page?: TMayBe<number>;
  size?: TMayBe<number>;
  error?: TMayBe<string>;
};

export type TDeferredRecordsResponse<TRecord> = {
  items?: TMayBe<Promise<TMayBe<TRecord[]>>>;
  total?: TMayBe<Promise<number>>;
  page?: TMayBe<number>;
  size?: TMayBe<number>;
  error?: TMayBe<string>;
};

export type TRouteLoaderType = "Default" | "Deferred";
