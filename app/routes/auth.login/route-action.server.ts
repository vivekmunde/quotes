import { ActionFunctionArgs, redirect } from "@remix-run/node";
import _login from "~/data/login.server";
import createUserSession from "~/utils/server/auth/create-user-session.server";
import { badRequest } from "~/utils/server/request.server";

export type TBadRequest = {
  fields?: {
    loginId?: FormDataEntryValue | null;
    password?: FormDataEntryValue | null;
  };
  errors?: {
    form?: string;
  };
};

async function login({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const password = form.get("password");
  const loginId = form.get("loginId");
  const { searchParams } = new URL(request.url);
  const redirectTo = form.get("redirectTo") ?? searchParams.get("redirectTo");

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
      fields,
      errors: { form: loginResponse.error },
    });
  }

  if (loginResponse.user?.id) {
    return redirect(redirectTo?.toString() ?? "/quotes", {
      headers: {
        "Set-Cookie": await createUserSession(loginResponse.user?.id),
      },
    });
  }

  return badRequest<TBadRequest>({
    fields,
    errors: { form: "Invalid login credentials!" },
  });
}

const action = async (args: ActionFunctionArgs) => {
  return login(args);
};

export default action;
