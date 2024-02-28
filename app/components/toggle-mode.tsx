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
    setMode(mode === "dark" ? "light" : "dark");
    toggleMode();
  };

  useEffect(() => {
    setMode(getMode());
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
          <Sun className="h-4 w-4" />
        </If.True>
        <If.False>
          <MoonStar className="h-4 w-4" />
        </If.False>
      </If>
    </Button>
  );
};

export default ToggleMode;
