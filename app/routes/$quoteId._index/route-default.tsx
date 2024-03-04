import withDefaultRouteData from "~/components/route/with-default-route-data";
import { defaultLoader } from "~/utils/route";
import RouteContent from "./route-content";
import routeLoader from "./route-loader.server";

export const loader = defaultLoader(routeLoader);

export default withDefaultRouteData(RouteContent, loader);
