import { useLocation, useNavigation } from "@remix-run/react";
import React from "react";
import If from "~/components/if";

const RouteContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigation = useNavigation();
  const location = useLocation();

  return (
    <If
      condition={
        navigation.state === "loading" &&
        location.pathname !== navigation.location.pathname
      }
    >
      <If.False>{children}</If.False>
    </If>
  );
};

export default RouteContainer;
