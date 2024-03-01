import React from "react";
import Layout from "~/components/layout";
import { Loading as QuoteLoading } from "~/components/quote";

const Loading: React.FC = () => {
  return (
    <React.Fragment>
      <Layout.Screen.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <QuoteLoading />
        </div>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <div className="h-6" />
      </Layout.Screen.Footer>
    </React.Fragment>
  );
};

export default Loading;
