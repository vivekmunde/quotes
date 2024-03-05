import { ActionFunctionArgs } from "@remix-run/node";
import logout from "~/utils/server/auth/logout.server";

const action = async (args: ActionFunctionArgs) => {
  return logout(args.request);
};

export default action;
