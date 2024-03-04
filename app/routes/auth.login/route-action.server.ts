import { ActionFunctionArgs, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { TFormResponse } from "~/types";
import { createUserSession } from "~/utils/server/auth";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";

async function login({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const password = form.get("password");
  const loginId = form.get("loginId");
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get("redirectTo") ?? "";

  if (typeof loginId !== "string" || typeof password !== "string") {
    return badRequest<TFormResponse<"loginId" | "password">>({
      fields: { loginId, password },
      errors: { message: "Invalid login credentials!" },
    });
  }

  const fields = { loginId, password };
  const loginResponse: TFormResponse<"loginId" | "password"> = { fields };
  loginResponse.errors = { message: undefined };

  if ((loginId ?? "").length === 0 || (password ?? "").length === 0) {
    loginResponse.errors.message = "Invalid login credentials!";
    return badRequest(loginResponse);
  }

  const user = await db.users.findUnique({
    where: { loginId },
    select: { id: true, passwordHash: true },
  });

  if (!user) {
    loginResponse.errors.message = "Invalid login credentials!";
    return badRequest(loginResponse);
  }

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);

  if (!isCorrectPassword) {
    loginResponse.errors.message = "Invalid login credentials!";
    return badRequest(loginResponse);
  }

  return redirect(redirectTo.length > 0 ? redirectTo : "/quotes", {
    headers: {
      "Set-Cookie": await createUserSession(user.id),
    },
  });
}

const action = async (args: ActionFunctionArgs) => {
  return login(args);
};

export default action;
