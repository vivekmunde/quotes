import { PrismaClient } from "@prisma/client";
import { TMayBe } from "~/types";
import { getQuoteUrlSegment } from "./quotes.server";

const db = new PrismaClient();

export const clear = async () => {
  console.log("⏳ Clearing users");
  await db.users.deleteMany();
  console.log("✓ Users cleared");

  console.log("⏳ Clearing quotes");
  await db.quotes.deleteMany();
  console.log("✓ Quotes cleared");
};

export const createUsers = async (
  admin: { loginId: string; passwordHash: string },
  others: { loginId: string; passwordHash: string }[]
) => {
  console.log("⏳ Creating admin user");
  const adminUser = await db.users.create({
    data: admin,
  });
  console.log("✓ Admin user created");

  if (others.length > 0) {
    console.log(`⏳ Creating other ${others.length} users`);
    await Promise.all(
      others.map((user) =>
        db.users.create({
          data: user,
        })
      )
    );
    console.log(`✓ ${others.length} other users created`);
  }

  return adminUser.id;
};

export const createQuotes = async (
  quotes: {
    title: string;
    author?: TMayBe<string>;
  }[],
  userId: string
) => {
  console.log(`⏳ Creating ${quotes.length} quotes`);
  await Promise.all(
    quotes.map(async (quote) => {
      const createdQuote = await db.quotes.create({
        data: { title: quote.title, author: quote.author, createdBy: userId },
      });

      await db.quotes.update({
        where: { id: createdQuote.id },
        data: { urlSegment: getQuoteUrlSegment(createdQuote.id, quote.title) },
      });
    })
  );
  console.log(`✓ ${quotes.length} quotes created`);
};
