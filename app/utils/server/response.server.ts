import { json } from "@remix-run/node";

export const response404 = <T>(data: T) =>
  json<T>(data, { status: 404, statusText: "NOT_FOUND" });

export const response500 = <T>(data: T) =>
  json<T & { error: string }>(
    { ...data, error: "Some error occurred" },
    { status: 500, statusText: "ERROR" }
  );
