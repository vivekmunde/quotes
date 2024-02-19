import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider, theme } from "antd";
import fs from "fs";
import React from "react";

const colorPrimary = "#ec4899";

const outputPath = "../../../public/antd.css";

const css = extractStyle((node) => {
  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "#ffffff",
            colorBgLayout: "#ffffff",
            colorBgContainer: "#ffffff",
            colorPrimary: colorPrimary,
            colorLink: colorPrimary,
          },
        }}
      >
        {node}
      </ConfigProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorBgBase: "#000000",
            colorBgLayout: "#000000",
            colorBgContainer: "#000000",
            colorPrimary: colorPrimary,
            colorLink: colorPrimary,
          },
        }}
      >
        {node}
      </ConfigProvider>
    </React.Fragment>
  );
});

fs.writeFileSync(outputPath, css);
