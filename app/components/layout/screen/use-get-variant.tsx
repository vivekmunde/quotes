import { useContext } from "react";
import { TMayBe } from "~/types";
import Context from "./context";
import { TVariant } from "./types";

const useGetVariant = (): TMayBe<TVariant> => {
  const { variant } = useContext(Context);

  return variant;
};

export default useGetVariant;
