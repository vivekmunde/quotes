import bcrypt from "bcryptjs";
import { db } from "~/utils/server/db.server";

export default async function isCorrectPassword({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) {
  const user = await db.users.findUnique({
    where: { id: userId },
    select: { id: true, passwordHash: true },
  });

  if (!user) {
    return false;
  }

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);

  if (!isCorrectPassword) {
    return false;
  }

  return true;
}
