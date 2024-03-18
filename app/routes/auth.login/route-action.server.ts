import { ActionFunctionArgs, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { TFormResponse } from "~/types";
import { createUserSession } from "~/utils/server/auth";
import isValidOTP from "~/utils/server/auth/is-valid-otp";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";

async function login({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const password = form.get("password");
  const loginId = form.get("loginId");
  const otp = form.get("otp");
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get("redirectTo") ?? "";

  if (
    typeof loginId !== "string" ||
    typeof password !== "string" ||
    typeof otp !== "string"
  ) {
    return badRequest<TFormResponse<"loginId" | "password">>({
      fields: { loginId, password },
      errors: { message: "Invalid login credentials!" },
    });
  }

  const fields = { loginId };
  const loginResponse: TFormResponse<"loginId"> = { fields };
  loginResponse.errors = { message: undefined };

  if (
    (loginId ?? "").length === 0 ||
    (password ?? "").length === 0 ||
    (process.env.NODE_ENV !== "development" && (otp ?? "").length === 0) ||
    !isValidOTP(otp)
  ) {
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
