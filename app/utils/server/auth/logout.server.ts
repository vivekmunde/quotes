import { redirect } from "@remix-run/node";
import destroyUserSession from "./destroy-user-session.server";

export default async function logout(request: Request) {
  const cookie = await destroyUserSession(request);

  const redirectTo = new URL(request.url).pathname;
  const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);

  return redirect(`/login?${searchParams}`, {
    headers: {
      "Set-Cookie": cookie,
    },
  });
}
