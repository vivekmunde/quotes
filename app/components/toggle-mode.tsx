import { useFetcher } from "@remix-run/react";
import { MoonStar, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import If from "~/components/if";
import useGetMode from "~/components/theme-provider/use-get-mode";
import useToggleMode from "~/components/theme-provider/use-toggle-mode";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { TMode } from "~/theme/types";

const ToggleMode: React.FC = () => {
  const fetcher = useFetcher();
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
    <fetcher.Form action="/api/user-preferences" method="post">
      <Input name="theme" type="hidden" value={mode} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="submit"
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
          </TooltipTrigger>
          <TooltipContent>
            <If condition={mode === "dark"}>
              <If.True>
                <div>Light Mode</div>
              </If.True>
              <If.False>
                <div>Dark Mode</div>
              </If.False>
            </If>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </fetcher.Form>
  );
};

export default ToggleMode;
