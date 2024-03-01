import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import destroyUserSession from "~/utils/server/auth/destroy-user-session.server";

const loader = async (args: LoaderFunctionArgs) => {
  const cookie = await destroyUserSession(args.request);

  return redirect(`/auth/login`, {
    headers: {
      "Set-Cookie": cookie,
    },
  });
};

export default loader;
