import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getQuotes().map((quote) => {
      return db.quotes.create({ data: quote });
    })
  );
}

seed();

function getQuotes() {
  return [
    {
      title: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt",
    },
    {
      title:
        "If you can’t communicate, it’s like winking at a girl in the dark – nothing happens.",
      author: "Warren Buffett",
    },
    {
      title:
        "Do not save what is left after spending, but spend what is left after saving.",
      author: "Warren Buffett",
    },
    {
      title: "Risk comes from not knowing what you’re doing.",
      author: "Warren Buffett",
    },
    {
      title:
        "It takes 20 years to build a reputation and five minutes to ruin it.",
      author: "Warren Buffett",
    },
    {
      title:
        "Someone’s sitting in the shade today because someone planted a tree a long time ago.",
      author: "Warren Buffett",
    },
    {
      title:
        "Read 500 pages like this every day. That’s how knowledge works. It builds up, like compound interest.",
      author: "Warren Buffett",
    },
    {
      title:
        "It’s better to hang out with people better than you. Pick out associates whose behavior is better than yours, and you’ll drift in that direction.",
      author: "Warren Buffett",
    },
  ];
}
