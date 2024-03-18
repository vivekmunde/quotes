import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { validateTitle } from "~/components/quote-form";
import { TFormResponse } from "~/types";
import { authorizedAccess } from "~/utils/server/auth";
import getUserId from "~/utils/server/auth/get-user-id.server";
import isValidOTP from "~/utils/server/auth/is-valid-otp";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";

const updateQuote = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const id = form.get("id");
  const title = form.get("title");
  const author = form.get("author");
  const otp = form.get("otp");

  if (
    typeof id !== "string" ||
    typeof title !== "string" ||
    typeof author !== "string"
  ) {
    return badRequest<TFormResponse<"id" | "author" | "title">>({
      fields: { id, title, author },
      errors: { message: "Invalid data!" },
    });
  }

  const fields = { id, title, author };

  const fieldErrors = {
    title: validateTitle(title),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest<TFormResponse<"id" | "author" | "title">>({
      fields,
      errors: { fields: fieldErrors },
    });
  }

  if (typeof otp !== "string" || !isValidOTP(otp)) {
    return badRequest<TFormResponse<"id" | "author" | "title">>({
      fields,
      errors: { message: "Invalid credentials!" },
    });
  }

  const quote = await db.quotes.update({
    where: { id },
    data: { author, title, updatedBy: await getUserId(request) },
  });

  return redirect(`/quotes/${quote.id}`);
};

const action = async (args: ActionFunctionArgs) => {
  return authorizedAccess(args.request, async () => await updateQuote(args));
};

export default action;
