import { ActionFunctionArgs } from "@remix-run/node";
import logout from "./api/logout.server";

const action = async (args: ActionFunctionArgs) => {
  return logout(args.request);
};

export default action;
