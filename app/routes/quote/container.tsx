import { Col, Row } from "antd";
import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Row>
      <Col xs={1} sm={2} md={4} lg={6} xl={6} />
      <Col xs={22} sm={20} md={16} lg={12} xl={12}>
        {children}
      </Col>
      <Col xs={1} sm={2} md={4} lg={6} xl={6} />
    </Row>
  );
};

export default Container;
