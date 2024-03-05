import { TypedResponse } from "@remix-run/node";
import logout from "~/utils/server/auth/logout.server";
import { db } from "../db.server";
import getUserId from "./get-user-id.server";

export default async function authorizedAccess<T>(
  request: Request,
  fn: () => T
): Promise<T | TypedResponse<never>> {
  const userId = await getUserId(request);

  if (typeof userId !== "string" || (userId ?? "").length === 0) {
    return await logout(request);
  }

  const user = await db.users.findUnique({
    where: { id: userId },
    select: { id: true },
  });

  if (!user?.id) {
    return await logout(request);
  }

  return fn();
}
