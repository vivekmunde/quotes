export default async function deferredResponse<T>(fn: () => Promise<T>) {
  const deferBy = Number(process.env.DEFER_LOADER_DELAY ?? 0);

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
