import getSessionStorage from "./get-session-storage.server";

export default function getUserSession(request: Request) {
  return getSessionStorage().getSession(request.headers.get("Cookie"));
}
