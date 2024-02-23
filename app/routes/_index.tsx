import type { MetaFunction } from "@remix-run/node";
import useToggleMode from "~/components/theme-provider/use-toggle-mode";
import { Button } from "~/components/ui/button";
import H1 from "~/components/ui/typography/h1";

export const meta: MetaFunction = () => {
  return [
    { title: "Quotes" },
    { name: "Quotes", content: "Welcome to Quotes!" },
  ];
};

export default function Index() {
  const onToggleMode = useToggleMode();

  return (
    <div className="p-6">
      <H1>Quotes</H1>
      <Button
        onClick={() => {
          onToggleMode();
        }}
      >
        Click Me!
      </Button>
    </div>
  );
}
