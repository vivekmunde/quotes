import React from "react";
import Content from "./content";
import Body from "./layout/body";
import Header from "./layout/header";
import Layout from "./layout/layout";

const QuoteLayout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Body>
        <Content />
      </Body>
    </Layout>
  );
};

export default QuoteLayout;
