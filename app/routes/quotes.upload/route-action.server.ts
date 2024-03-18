import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { validateTitle } from "~/components/quote-form";
import { TFormResponse, TMayBe } from "~/types";
import { authorizedAccess } from "~/utils/server/auth";
import getUserId from "~/utils/server/auth/get-user-id.server";
import isValidOTP from "~/utils/server/auth/is-valid-otp";
import { db } from "~/utils/server/db.server";
import {
  deriveNextShortId,
  getNextShortId,
  getQuoteUrlSegment,
} from "~/utils/server/quotes.server";
import { badRequest } from "~/utils/server/request.server";

const uploadQuotes = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const quotes = form.get("quotes");
  const otp = form.get("otp");

  if (typeof quotes !== "string") {
    return badRequest<TFormResponse<"quotes">>({
      fields: { quotes },
      errors: { message: "Invalid data!" },
    });
  }

  let quotesJSON: { title: string; author?: TMayBe<string> }[] = [];
  const fields = { quotes };

  try {
    quotesJSON = JSON.parse(quotes);

    const invalidQuotes = quotesJSON.filter((it) => !!validateTitle(it.title));

    if (invalidQuotes.length > 0) {
      return badRequest<TFormResponse<"quotes">>({
        fields,
        errors: {
          message: `Invalid quotes JSON! ${JSON.stringify(invalidQuotes)}`,
        },
      });
    }
  } catch (error: any) {
    return badRequest<TFormResponse<"quotes">>({
      fields,
      errors: { fields: { quotes: "Invalid quotes JSON!" } },
    });
  }

  if (
    process.env.NODE_ENV !== "development" &&
    (typeof otp !== "string" || !isValidOTP(otp))
  ) {
    return badRequest<TFormResponse<"quotes">>({
      fields,
      errors: { fields: { quotes: "Invalid quotes JSON!" } },
    });
  }

  let currentShortId = "";
  let nextShortId = await getNextShortId();

  await Promise.all(
    quotesJSON.map(async (it) => {
      nextShortId =
        currentShortId.length > 0
          ? deriveNextShortId(currentShortId)
          : nextShortId;

      currentShortId = nextShortId;

      const quote = await db.quotes.create({
        data: {
          shortId: nextShortId,
          title: it.title,
          author: it.author,
          createdBy: await getUserId(request),
        },
      });

      await db.quotes.update({
        where: { id: quote.id },
        data: {
          urlSegment: getQuoteUrlSegment(
            quote.shortId ?? quote.id,
            quote.title
          ),
        },
      });
    })
  );

  return redirect("/quotes");
};

const action = async (args: ActionFunctionArgs) => {
  return authorizedAccess(args.request, async () => await uploadQuotes(args));
};

export default action;
