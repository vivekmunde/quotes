import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";

const validateTitle = (val: string | undefined | null) => {
  if ((val ?? "").length === 0) {
    return "Please enter the quote!";
  }

  if ((val ?? "").length < 20) {
    return "The quote is too small!";
  }
};

export type TBadRequest = {
  fields?: {
    title?: FormDataEntryValue | null;
    author?: FormDataEntryValue | null;
  };
  fieldErrors?: {
    title?: string;
  };
  formError?: string;
};

const createNewQuote = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const title = form.get("title");
  const author = form.get("author");

  if (typeof title !== "string" || typeof author !== "string") {
    return badRequest<TBadRequest>({
      fields: { title, author },
      fieldErrors: { title: undefined },
      formError: "Invalid data!",
    });
  }

  const fields = { title, author };

  const fieldErrors = {
    title: validateTitle(title),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest<TBadRequest>({
      fieldErrors,
      fields,
      formError: undefined,
    });
  }

  const quote = await db.quotes.create({ data: fields });

  return redirect(`/quotes/${quote.id}`);
};

export default createNewQuote;
