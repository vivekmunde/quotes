import { useNavigation } from "@remix-run/react";

const useIsLoading = () => {
  const navigation = useNavigation();

  return () => navigation.state === "loading";
};

export default useIsLoading;
