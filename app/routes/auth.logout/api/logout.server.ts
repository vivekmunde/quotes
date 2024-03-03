import { redirect } from "@remix-run/node";
import { destroyUserSession } from "~/utils/server/auth";

const logout = async (request: Request) => {
  const cookie = await destroyUserSession(request);
  const redirectTo = new URL(request.url).searchParams.get("redirectTo");
  const searchParams = new URLSearchParams([["redirectTo", redirectTo ?? ""]]);

  return redirect(`/auth/login?${searchParams}`, {
    headers: {
      "Set-Cookie": cookie,
    },
  });
};

export default logout;
