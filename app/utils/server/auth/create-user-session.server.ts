import getSessionStorage from "./get-session-storage.server";

export default async function createUserSession(userId: string) {
  const sessionStorage = getSessionStorage();

  const session = await sessionStorage.getSession();

  session.set("userId", userId);

  return await sessionStorage.commitSession(session);
}
