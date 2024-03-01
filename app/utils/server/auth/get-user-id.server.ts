import getUserSession from "./get-user-session.server";

export default async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");

  if (!userId || typeof userId !== "string") {
    return null;
  }

  return userId;
}
