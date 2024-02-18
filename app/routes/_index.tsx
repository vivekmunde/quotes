import type { MetaFunction } from "@remix-run/node";
import { ConfigProvider, Typography, theme } from "antd";
import React, { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Quotes" },
    { name: "Quotes", content: "Welcome to Quotes!" },
  ];
};

export default function Index() {
  return (
    <React.Fragment>
      <Typography.Title level={1}>Quotes</Typography.Title>
    </React.Fragment>
  );
}
