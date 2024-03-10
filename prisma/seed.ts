import { clear, createQuotes, createUsers } from "~/utils/server/seed.server";
import { admin, quotes } from "./seed-data";

async function seed() {
  await clear();

  const adminUserId = await createUsers(admin, []);

  await createQuotes(quotes, adminUserId);
}

seed();
