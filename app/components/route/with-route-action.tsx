import { useActionData } from "@remix-run/react";

const withRouteAction = <TProps, TAction>(
  Route: React.FC<TProps>,
  action: TAction
) => {
  const RouteAction: React.FC<TProps> = ({ ...props }) => {
    const actionResponse = useActionData<typeof action>();

    return <Route {...props} actionResponse={actionResponse} />;
  };

  return RouteAction;
};

export default withRouteAction;
