import React from "react";
import Layout from "~/components/layout";
import { Loading as QuoteLoading } from "~/components/quote";

const Loading: React.FC = () => {
  return (
    <React.Fragment>
      <Layout.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <QuoteLoading />
        </div>
      </Layout.Body>
      <Layout.Footer>
        <div className="h-6" />
      </Layout.Footer>
    </React.Fragment>
  );
};

export default Loading;
