import { PrismaClient } from "@prisma/client";
import {
  deriveNextShortId,
  getNextShortId,
  getQuoteUrlSegment,
} from "../app/utils/server/quotes.server";
import { quotes, users } from "./seed-data.server";

const db = new PrismaClient();

const clear = async () => {
  console.log("⏳ Clearing users");
  await db.users.deleteMany();
  console.log("✅ Users cleared");

  console.log("⏳ Clearing quotes");
  await db.quotes.deleteMany();
  console.log("✅ Quotes cleared");
};

const createUsers = async () => {
  console.log(`⏳ Creating ${users.length} users`);
  await Promise.all(
    users.map((user) =>
      db.users.create({
        data: user,
      })
    )
  );
  console.log(`✅ ${users.length} users created`);
};

const createQuotes = async () => {
  const admin = await db.users.findUnique({ where: { loginId: "admin" } });

  if (admin) {
    console.log(`⏳ Creating ${quotes.length} quotes`);

    let currentShortId = "";
    let nextShortId = await getNextShortId();

    await Promise.all(
      quotes.map(async (quote) => {
        nextShortId =
          currentShortId.length > 0
            ? deriveNextShortId(currentShortId)
            : nextShortId;

        currentShortId = nextShortId;

        const createdQuote = await db.quotes.create({
          data: {
            shortId: nextShortId,
            title: quote.title,
            author: quote.author,
            createdBy: admin.id,
          },
        });

        await db.quotes.update({
          where: { id: createdQuote.id },
          data: {
            urlSegment: getQuoteUrlSegment(
              createdQuote.shortId ?? createdQuote.id,
              quote.title
            ),
          },
        });
      })
    );

    console.log(`✅ ${quotes.length} quotes created`);
  } else {
    console.error(`❌ Admin user not found`);
  }
};

const seed = async () => {
  await clear();
  await createUsers();
  await createQuotes();
};

seed();
