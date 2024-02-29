import { ActionFunctionArgs, redirect } from "@remix-run/node";
import getRandomQuote from "~/data/get-random-quote.server";
import _login from "~/data/login.server";
import { badRequest } from "~/utils/request.server";
import { createUserSession } from "~/utils/session.server";

export function getQuote() {
  return getRandomQuote({ select: { title: true, author: true } });
}

export type TBadRequest = {
  fields?: {
    loginId?: FormDataEntryValue | null;
    password?: FormDataEntryValue | null;
  };
  errors?: {
    form?: string;
  };
};

export async function login({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const password = form.get("password");
  const loginId = form.get("loginId");
  const redirectTo = form.get("redirectTo");

  if (typeof loginId !== "string" || typeof password !== "string") {
    return badRequest<TBadRequest>({
      fields: { loginId, password },
      errors: { form: "Invalid login credentials!" },
    });
  }

  const fields = { loginId, password };

  const loginResponse = await _login({ loginId, password });

  if (loginResponse.error) {
    return badRequest<TBadRequest>({
      fields: { loginId, password },
      errors: { form: loginResponse.error },
    });
  }

  if (loginResponse.user?.id) {
    return redirect(redirectTo?.toString() ?? "/", {
      headers: {
        "Set-Cookie": await createUserSession(loginResponse.user?.id),
      },
    });
  }

  return badRequest<TBadRequest>({
    fields: { loginId, password },
    errors: { form: "Invalid login credentials!" },
  });
}
