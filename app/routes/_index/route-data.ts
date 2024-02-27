import { db } from "~/utils/db.server";

const data = async () => {
  const count = await db.quotes.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [nextQuote] = await db.quotes.findMany({
    skip: randomRowNumber,
    take: 1,
    select: { id: true },
  });

  return nextQuote;
};

export default data;
