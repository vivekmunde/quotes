import getPreferencesSession from "./get-preferences-session.server";
import getSessionStorage from "./get-preferences-storage.server";

export default async function destroyPreferences(request: Request) {
  const sessionStorage = getSessionStorage();

  return await sessionStorage.destroySession(
    await getPreferencesSession(request)
  );
}
