import { clear, createQuotes, createUsers } from "~/utils/server/seed.server";
import { quotes } from "./seed-data";
import { admin, munds } from "./seed-data-users";

async function seed() {
  await clear();

  const adminUserId = await createUsers(admin, [munds]);

  await createQuotes(quotes, adminUserId);
}

seed();
