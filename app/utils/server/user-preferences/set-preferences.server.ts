import getSessionStorage from "./get-preferences-storage.server";
import { TPreferences } from "./types";

export default async function setPreferences(preferences: TPreferences) {
  const sessionStorage = getSessionStorage();

  const session = await sessionStorage.getSession();

  session.set("theme", preferences.theme);

  return await sessionStorage.commitSession(session);
}
