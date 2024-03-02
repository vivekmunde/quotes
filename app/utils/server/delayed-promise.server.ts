export default async function delayedPromise<T>(fn: () => Promise<T>) {
  const isDevMode = process.env.NODE_ENV === "development";

  if (isDevMode) {
    return new Promise<T>((resolve) => {
      const t = setTimeout(async () => {
        clearTimeout(t);

        return resolve(fn());
      }, Number(process.env.ROUTE_LOADER_DELAY ?? 1000));
    });
  }

  return fn();
}
