import getRandomQuote from "~/data/get-random-quote";

export default function data() {
  return getRandomQuote({ select: { title: true, author: true } });
}
