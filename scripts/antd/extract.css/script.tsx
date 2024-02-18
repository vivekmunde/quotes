import fs from "fs";
import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider, theme } from "antd";
import React from "react";

const outputPath = "../../../public/antd.min.css";

const css = extractStyle((node) => (
  <React.Fragment>
    <ConfigProvider>{node}</ConfigProvider>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {node}
    </ConfigProvider>
  </React.Fragment>
));

fs.writeFileSync(outputPath, css);
