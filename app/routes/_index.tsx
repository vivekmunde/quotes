import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import H1 from "~/components/ui/typography/h1";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-6">
      <H1>Quotes</H1>
      <Button>Click Me!</Button>
    </div>
  );
}
