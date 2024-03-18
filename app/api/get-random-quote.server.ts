import { db } from "~/utils/server/db.server";

const getRandomQuote = async (options?: {
  select?: { title?: boolean; author?: boolean; urlSegment: true };
}) => {
  const count = await db.quotes.count();

  const randomRowNumber = Math.floor(Math.random() * count);

  const [nextQuote] = await db.quotes.findMany({
    skip: randomRowNumber,
    take: 1,
    select: {
      id: true,
      shortId: true,
      urlSegment: true,
      title: options?.select?.title,
      author: options?.select?.author,
    },
  });

  return nextQuote;
};

export default getRandomQuote;
