import { useNavigation } from "@remix-run/react";
import useIsLoading from "./use-is-loading";

const useNavigatingToPage = () => {
  const isLoading = useIsLoading()();
  const navigation = useNavigation();

  return (page: number) =>
    isLoading && Number(navigation.formData?.get("page") ?? -1) === page;
};

export default useNavigatingToPage;
