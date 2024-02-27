import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";

const data = async () => {
  const quotes = await db.quotes.findMany({
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, author: true },
    take: 10,
  });

  return json({ quotes });
};

export default data;
