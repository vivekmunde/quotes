import React, { createContext } from "react";
import { TRouteType } from "~/types";

export const RootContext = createContext<{ routeType: TRouteType }>({
  routeType: "Default",
});

const RootProvider: React.FC<{
  children: React.ReactNode;
  routeType: TRouteType;
}> = ({ children, routeType }) => {
  return (
    <RootContext.Provider value={{ routeType }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootProvider;
