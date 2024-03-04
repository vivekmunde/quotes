import { LoaderFunctionArgs, TypedDeferredData, defer } from "@remix-run/node";
import deferredResponse from "./server/delayed-promise.server";

export const defaultLoader = <T>(
  loader: (args: LoaderFunctionArgs) => Promise<T>
) => {
  return async (args: LoaderFunctionArgs) => {
    try {
      return await loader(args);
    } catch (error: any) {
      try {
        const parsedError = JSON.parse(error?.message);
        if (parsedError?.status !== undefined) {
          throw new Response(parsedError?.message, {
            status: parsedError.status,
          });
        } else {
          throw error;
        }
      } catch (error: any) {
        throw error;
      }
    }
  };
};

export const deferredLoader = <T>(
  loader: (args: LoaderFunctionArgs) => Promise<T>
) => {
  return async (args: LoaderFunctionArgs) =>
    defer({ dataPromise: deferredResponse<T>(() => loader(args)) });
};

export const decideLoaderType = <T>(
  defaultLoader: (args: LoaderFunctionArgs) => Promise<T>,
  deferredLoader: (args: LoaderFunctionArgs) => Promise<
    TypedDeferredData<{
      dataPromise: Promise<T>;
    }>
  >
) => {
  return (args: LoaderFunctionArgs) =>
    Number(process.env.DEFER_LOADER_DELAY ?? 0) > 0
      ? deferredLoader(args)
      : defaultLoader(args);
};
