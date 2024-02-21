import type { MetaFunction } from "@remix-run/node";
import { Typography } from "antd";

export const meta: MetaFunction = () => {
  return [
    { title: "Quotes" },
    { name: "Quotes", content: "Welcome to Quotes!" },
  ];
};

export default function Index() {
  return <Typography.Title level={1}>Quotes</Typography.Title>;
}
