import logout from "~/utils/server/auth/logout.server";
import { db } from "../db.server";
import getUserSession from "./get-user-session.server";

export default async function authorizedAccess<T>(
  request: Request,
  fn: () => T
): Promise<T> {
  const session = await getUserSession(request);
  const userId = session.get("userId");

  if (typeof userId !== "string" || !userId) {
    logout(request);
  }

  const user = await db.quotes.findUnique({
    where: { id: userId },
    select: { id: true },
  });

  if (!user?.id) {
    logout(request);
  }

  return fn();
}
