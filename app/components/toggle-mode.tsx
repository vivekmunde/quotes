import { MoonStar, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import If from "~/components/if";
import useGetMode from "~/components/theme-provider/use-get-mode";
import useToggleMode from "~/components/theme-provider/use-toggle-mode";
import { Button } from "~/components/ui/button";
import { TMode } from "~/theme/types";

const ToggleMode: React.FC = () => {
  const [mode, setMode] = useState<TMode>("light");
  const getMode = useGetMode();
  const toggleMode = useToggleMode();

  const onToggleMode = () => {
    setMode(getMode() === "dark" ? "light" : "dark");
    toggleMode();
  };

  useEffect(() => {
    const t = setTimeout(() => {
      clearTimeout(t);
      setMode(getMode());
    }, 0);

    return () => clearTimeout(t);
  }, []);

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => {
        onToggleMode();
      }}
    >
      <If condition={mode === "dark"}>
        <If.True>
          <Sun />
        </If.True>
        <If.False>
          <MoonStar />
        </If.False>
      </If>
    </Button>
  );
};

export default ToggleMode;
