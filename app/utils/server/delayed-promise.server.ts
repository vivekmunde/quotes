export default async function delayedPromise<T>(fn: () => Promise<T>) {
  return new Promise<T>((resolve) => {
    const t = setTimeout(async () => {
      clearTimeout(t);

      return resolve(fn());
    }, Number(process.env.NODE_ENV === "development" ? process.env.ROUTE_LOADER_DELAY ?? 0 : 0));
  });
}
