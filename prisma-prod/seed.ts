import { PrismaClient } from "@prisma/client";
import { quotes } from "./seed-data";
import { admin, munds } from "./seed-data-users";
const db = new PrismaClient();

async function seed() {
  try {
    await db.users.delete({ where: { loginId: "admin" } });
  } catch (error: any) {
    console.error(error);
  }
  try {
    await db.users.delete({ where: { loginId: "munds" } });
  } catch (error: any) {
    console.error(error);
  }

  const adminUser = await db.users.create({
    data: admin,
  });

  await db.users.create({
    data: munds,
  });

  await db.quotes.deleteMany();

  await Promise.all(
    quotes.map((quote) => {
      return db.quotes.create({
        data: { ...quote, createdBy: adminUser.id },
      });
    })
  );
}

seed();
