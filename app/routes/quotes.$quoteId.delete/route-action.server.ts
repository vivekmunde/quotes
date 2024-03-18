import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { TFormResponse } from "~/types";
import { authorizedAccess } from "~/utils/server/auth";
import getUserId from "~/utils/server/auth/get-user-id.server";
import isCorrectPassword from "~/utils/server/auth/is-correct-password";
import isValidOTP from "~/utils/server/auth/is-valid-otp";
import { db } from "~/utils/server/db.server";
import { badRequest } from "~/utils/server/request.server";

async function deleteQuote({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const quoteId = form.get("quoteId");
  const password = form.get("password");
  const otp = form.get("otp");

  if (typeof quoteId !== "string" || !quoteId) {
    return badRequest<TFormResponse<"quoteId">>({
      fields: { quoteId },
      errors: {
        message: "The quote you are trying to delete was not recieved!",
      },
    });
  }

  if (
    typeof password !== "string" ||
    !password ||
    typeof otp !== "string" ||
    !isValidOTP(otp)
  ) {
    return badRequest<TFormResponse<"quoteId">>({
      fields: { quoteId },
      errors: { message: "Invalid credentials!" },
    });
  }

  const fields = { quoteId, password: "" };

  if (
    !(await isCorrectPassword({ userId: await getUserId(request), password }))
  ) {
    return badRequest<TFormResponse<"quoteId" | "password">>({
      fields,
      errors: {
        message: "Invalid credentials!",
      },
    });
  }

  const quote = await db.quotes.findUnique({
    where: { id: quoteId },
    select: { id: true },
  });

  if (!quote?.id) {
    return badRequest<TFormResponse<"quoteId">>({
      fields,
      errors: { message: "The quote you are trying to delete does not exist!" },
    });
  }

  await db.quotes.delete({ where: { id: quoteId } });

  return redirect("/quotes?action=DELETE_QUOTE_SUCCESS");
}

const action = async (args: ActionFunctionArgs) => {
  return authorizedAccess(args.request, async () => await deleteQuote(args));
};

export default action;
