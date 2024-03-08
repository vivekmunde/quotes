import { useSearchParams } from "@remix-run/react";
import React from "react";
import { Input } from "~/components/ui/input";

export const Intent: React.FC<{ intent: "page" | "size" | "q" }> = ({
  intent,
}) => {
  return <Input name="intent" value={intent} type="hidden" />;
};

export const Param: React.FC<{
  param: "page" | "size" | "q";
  value?: string | number;
}> = ({ param, value }) => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get(param)?.toString() ?? "";

  return <Input name={param} value={value ?? paramValue} type="hidden" />;
};
