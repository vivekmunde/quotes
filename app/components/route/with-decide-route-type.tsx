import React, { useContext } from "react";
import { RootContext } from "../RootProvider";

const withDecideRouteType = <TProps,>(
  DefaultRoute: (props: TProps & JSX.IntrinsicAttributes) => React.ReactNode,
  DeferredRoute: (props: TProps & JSX.IntrinsicAttributes) => React.ReactNode
): ((props: TProps & JSX.IntrinsicAttributes) => React.ReactNode) => {
  const DecideRouteType = (props: TProps & JSX.IntrinsicAttributes) => {
    const { routeLoaderType } = useContext(RootContext);

    return routeLoaderType === "Deferred" ? (
      <DeferredRoute {...props} />
    ) : (
      <DefaultRoute {...props} />
    );
  };

  return DecideRouteType;
};

export default withDecideRouteType;
