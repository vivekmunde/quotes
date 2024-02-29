import bcrypt from "bcryptjs";
import { TMayBe } from "~/types";
import { db } from "~/utils/db.server";

const validateLoginId = (loginId?: TMayBe<string>) => {
  if ((loginId ?? "").length === 0) {
    return "Invalid login credentials!";
  }
};

const validatePassword = (password?: TMayBe<string>) => {
  if ((password ?? "").length === 0) {
    return "Invalid login credentials!";
  }
};

export type TLoginResponse = {
  user?: { id: string };
  error?: string;
};

export default async function login({
  loginId,
  password,
}: {
  loginId?: TMayBe<string>;
  password?: TMayBe<string>;
}): Promise<TLoginResponse> {
  if (typeof loginId !== "string" || typeof password !== "string") {
    return {
      error: "Invalid login credentials!",
    };
  }

  if (validateLoginId(loginId) || validatePassword(password)) {
    return {
      error: "Invalid login credentials!",
    };
  }

  const user = await db.users.findUnique({
    where: { loginId },
    select: { id: true, passwordHash: true },
  });

  if (!user) {
    return {
      error: "Invalid login credentials!",
    };
  }

  console.log({ password, hash: user.passwordHash });

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);

  if (!isCorrectPassword) {
    return {
      error: "Invalid login credentials!",
    };
  }

  return { user: { id: user.id } };
}
