import { Typography } from "antd";
import React from "react";
import styles from "./styles.module.css";

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <Typography.Title level={1}>
        The only thing we have to fear is fear itself.
      </Typography.Title>
      <div>
        <Typography.Text type="secondary">
          - Franklin D. Roosevelt
        </Typography.Text>
      </div>
    </div>
  );
};

export default Content;
