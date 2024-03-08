import { useNavigation } from "@remix-run/react";

const useIsIntent = () => {
  const navigation = useNavigation();

  return (intent: "page" | "size" | "q") =>
    navigation.formData?.get("intent") === intent;
};

export default useIsIntent;
