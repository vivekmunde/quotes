import { useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import useSetMode from "./use-set-mode";

const useDefaultMode = () => {
  const submit = useSubmit();
  const setMode = useSetMode();

  useEffect(() => {
    const themeClassName = document?.documentElement.className;
    const isLight = themeClassName.match(/light/gi);
    const isDark = themeClassName.match(/dark/gi);
    const isModeSet = !!(isLight || isDark);

    if (!isModeSet) {
      const systemMode = window?.matchMedia("(prefers-color-scheme: dark)")
        ?.matches
        ? "dark"
        : "light";

      setMode(systemMode);

      try {
        submit(
          { theme: systemMode },
          {
            action: "/api/user-preferences",
            method: "POST",
            navigate: false,
          }
        );
      } catch (error: any) {
        console.log(error);
      }
    }
  }, []);
};

export default useDefaultMode;
