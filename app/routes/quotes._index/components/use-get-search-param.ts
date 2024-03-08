import { useSearchParams } from "@remix-run/react";

const useGetSearchParam = () => {
  const [searchParams] = useSearchParams();

  return (param: "page" | "size" | "q") =>
    searchParams.get(param)?.toString() ?? "";
};

export default useGetSearchParam;
