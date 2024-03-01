import { redirect } from "@remix-run/node";
import destroyUserSession from "./destroy-user-session.server";
import getUserSession from "./get-user-session.server";

export default async function authorizedAccess<T>(
  request: Request,
  fn: () => T
): Promise<T> {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  const redirectTo = new URL(request.url).pathname;

  if (!userId || typeof userId !== "string") {
    destroyUserSession(request);

    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/auth/login?${searchParams}`);
  }

  return fn();
}
