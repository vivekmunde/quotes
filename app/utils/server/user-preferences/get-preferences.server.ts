import getPreferencesSession from "./get-preferences-session.server";
import { TPreferences } from "./types";

export default async function getPreferences(
  request: Request
): Promise<TPreferences> {
  const session = await getPreferencesSession(request);

  const theme = session.get("theme");

  return { theme };
}
