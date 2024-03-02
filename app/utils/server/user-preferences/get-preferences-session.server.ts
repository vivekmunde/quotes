import getSessionStorage from "./get-preferences-storage.server";

export default function getPreferencesSession(request: Request) {
  return getSessionStorage().getSession(request.headers.get("Cookie"));
}
