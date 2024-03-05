import { LoaderFunctionArgs } from "@remix-run/node";
import logout from "~/utils/server/auth/logout.server";

const loader = async (args: LoaderFunctionArgs) => {
  return logout(args.request);
};

export default loader;
