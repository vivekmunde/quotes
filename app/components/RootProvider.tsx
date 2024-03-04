import React, { createContext } from "react";
import { TRouteLoaderType } from "~/types";

export const RootContext = createContext<{ routeLoaderType: TRouteLoaderType }>(
  {
    routeLoaderType: "Default",
  }
);

const RootProvider: React.FC<{
  children: React.ReactNode;
  routeLoaderType: TRouteLoaderType;
}> = ({ children, routeLoaderType }) => {
  return (
    <RootContext.Provider value={{ routeLoaderType }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootProvider;
