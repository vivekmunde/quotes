import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { validateTitle } from "~/components/quote-form";
import { TFormResponse } from "~/types";
import { authorizedAccess } from "~/utils/server/auth";
import getUserId from "~/utils/server/auth/get-user-id.server";
import isValidOTP from "~/utils/server/auth/is-valid-otp";
import { db } from "~/utils/server/db.server";
import {
  getNextShortId,
  getQuoteUrlSegment,
} from "~/utils/server/quotes.server";
import { badRequest } from "~/utils/server/request.server";

const createNewQuote = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const title = form.get("title");
  const author = form.get("author");
  const otp = form.get("otp");

  if (typeof title !== "string" || typeof author !== "string") {
    return badRequest<TFormResponse<"author" | "title">>({
      fields: { title, author },
      errors: { message: "Invalid data!" },
    });
  }

  const fields = { title, author };

  const fieldErrors = {
    title: validateTitle(title),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest<TFormResponse<"author" | "title">>({
      fields,
      errors: { fields: fieldErrors },
    });
  }

  if (
    process.env.NODE_ENV !== "development" &&
    (typeof otp !== "string" || !isValidOTP(otp))
  ) {
    return badRequest<TFormResponse<"author" | "title">>({
      fields,
      errors: { message: "Invalid credentials!" },
    });
  }

  const quote = await db.quotes.create({
    data: {
      shortId: await getNextShortId(),
      title,
      author,
      createdBy: await getUserId(request),
    },
  });

  await db.quotes.update({
    where: { id: quote.id },
    data: { urlSegment: getQuoteUrlSegment(quote.shortId ?? quote.id, title) },
  });

  return redirect(`/quotes/${quote.id}`);
};

const action = async (args: ActionFunctionArgs) => {
  return authorizedAccess(args.request, async () => await createNewQuote(args));
};

export default action;
