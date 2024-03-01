import React from "react";
import Layout from "~/components/layout";
import { Loading as QuoteLoading } from "~/components/quote";

const RouteSkeleton: React.FC = () => {
  return (
    <Layout.Screen>
      <Layout.Screen.Header />
      <Layout.Screen.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <QuoteLoading />
        </div>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <div className="h-6" />
      </Layout.Screen.Footer>
    </Layout.Screen>
  );
};

export default RouteSkeleton;
