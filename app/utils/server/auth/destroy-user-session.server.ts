import getSessionStorage from "./get-session-storage.server";
import getUserSession from "./get-user-session.server";

export default async function destroyUserSession(request: Request) {
  const sessionStorage = getSessionStorage();

  return await sessionStorage.destroySession(await getUserSession(request));
}
