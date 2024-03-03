import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { validateTitle } from "~/components/quote-form";
import { authorizedAccess } from "~/utils/server/auth";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";

export type TBadRequest = {
  fields?: {
    title?: FormDataEntryValue | null;
    author?: FormDataEntryValue | null;
  };
  errors?: {
    fields?: {
      title?: string;
    };
    form?: string;
  };
};

const createNewQuote = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const title = form.get("title");
  const author = form.get("author");

  if (typeof title !== "string" || typeof author !== "string") {
    return badRequest<TBadRequest>({
      fields: { title, author },
      errors: { form: "Invalid data!" },
    });
  }

  const fields = { title, author };

  const fieldErrors = {
    title: validateTitle(title),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest<TBadRequest>({
      fields,
      errors: { fields: fieldErrors },
    });
  }

  const quote = await db.quotes.create({ data: fields });

  return redirect(`/quotes/${quote.id}`);
};

const action = async (args: ActionFunctionArgs) => {
  return authorizedAccess(args.request, () => createNewQuote(args));
};

export default action;
