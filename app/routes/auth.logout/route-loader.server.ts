import { LoaderFunctionArgs } from "@remix-run/node";
import logout from "./api/logout.server";

const loader = async (args: LoaderFunctionArgs) => {
  return logout(args.request);
};

export default loader;
