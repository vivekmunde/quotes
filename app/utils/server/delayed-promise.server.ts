export default async function deferredLoaderResponse<T>(fn: () => Promise<T>) {
  const deferBy = Number(process.env.LOADER_DEFER_DELAY ?? 0);

  if (deferBy > 0) {
    return new Promise<T>((resolve) => {
      const t = setTimeout(async () => {
        clearTimeout(t);

        return resolve(fn());
      }, deferBy);
    });
  }

  return fn();
}
