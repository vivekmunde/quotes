import { redirect } from "@remix-run/node";
import destroyUserSession from "~/utils/server/auth/destroy-user-session.server";

const logout = async (request: Request) => {
  const cookie = await destroyUserSession(request);

  return redirect(`/auth/login`, {
    headers: {
      "Set-Cookie": cookie,
    },
  });
};

export default logout;
