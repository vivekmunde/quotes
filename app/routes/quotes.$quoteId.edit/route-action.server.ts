import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { validateTitle } from "~/components/quote-form";
import { TFormResponse } from "~/types";
import { authorizedAccess } from "~/utils/server/auth";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";

const updateQuote = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const id = form.get("id");
  const title = form.get("title");
  const author = form.get("author");

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

  const quote = await db.quotes.update({
    where: { id },
    data: { author, title },
  });

  return redirect(`/quotes/${quote.id}`);
};

const action = async (args: ActionFunctionArgs) => {
  return authorizedAccess(args.request, async () => await updateQuote(args));
};

export default action;
