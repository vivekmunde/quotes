import { db } from "~/utils/server/db.server";

const urlSegmentSeparator = "___";

export const getQuoteUrlSegment = (id: string, title: string) => {
  return [
    title
      .replace(/[^a-z0-9 ]/gi, "")
      .split(" ")
      .filter((it) => it.trim().length > 0)
      .slice(0, 10)
      .map((it) => it.toLowerCase())
      .join("-"),
    id,
  ].join(urlSegmentSeparator);
};

export const getQuoteIdFrmomUrlSegment = (urlSegment: string) => {
  return urlSegment.split(urlSegmentSeparator).pop() ?? urlSegment;
};

export const deriveNextShortId = (currentKey: string) => {
  const chars = "abcdefghijklmnopqrstuvwxyz";

  const currentKeyReverseSplit = currentKey.split("").reverse();

  const nextKeyReverseChars = [];

  for (
    let currentKeyReverseSplitIndex = 0;
    currentKeyReverseSplitIndex < currentKeyReverseSplit.length;
    currentKeyReverseSplitIndex++
  ) {
    const currentChar = currentKeyReverseSplit[currentKeyReverseSplitIndex];
    const currentCharIndex = chars.indexOf(currentChar);

    if (currentCharIndex === -1) {
      throw new Error(`Unknown character '${currentChar}'!`);
    }

    if (currentCharIndex < chars.length - 1) {
      nextKeyReverseChars.push(chars[currentCharIndex + 1]);

      nextKeyReverseChars.push(
        ...currentKeyReverseSplit.slice(currentKeyReverseSplitIndex + 1)
      );

      break;
    } else {
      nextKeyReverseChars.push(chars[0]);
    }
  }

  const nextKey = nextKeyReverseChars.reverse().join("");

  if (currentKey === nextKey) {
    throw new Error(`Could not derive next unique key for ${currentKey}!`);
  }

  return nextKey;
};

export const getNextShortId = async () => {
  const quotes = await db.quotes.findMany({
    select: {
      shortId: true,
    },
    orderBy: {
      shortId: "desc",
    },
    take: 1,
  });

  const currentShortId =
    quotes && quotes.length > 0 ? quotes[0].shortId : undefined;

  if (currentShortId) {
    return deriveNextShortId(currentShortId);
  }

  return "aaaaa";
};
