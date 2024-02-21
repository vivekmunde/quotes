import { Col, Row, RowProps } from "antd";
import React from "react";

const Container: React.FC<RowProps> = ({ children, ...props }) => {
  return (
    <Row {...props}>
      <Col xs={1} sm={1} md={2} lg={4} xl={5} />
      <Col xs={22} sm={22} md={20} lg={16} xl={14}>
        {children}
      </Col>
      <Col xs={1} sm={1} md={2} lg={4} xl={5} />
    </Row>
  );
};

export default Container;
