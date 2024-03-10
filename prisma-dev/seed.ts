import { PrismaClient } from "@prisma/client";
import { admin, quotes } from "./seed-data";
const db = new PrismaClient();

async function seed() {
  const adminUser = await db.users.create({
    data: admin,
  });

  await Promise.all(
    quotes.map((quote) => {
      return db.quotes.create({
        data: { ...quote, createdBy: adminUser.id },
      });
    })
  );
}

seed();
