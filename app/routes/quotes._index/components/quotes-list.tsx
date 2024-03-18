import { Link, useLocation } from "@remix-run/react";
import React from "react";
import If from "~/components/if";
import { TMayBe } from "~/types";
import QuoteActions from "./quotes-actions";
import QuoteIndex from "./quotes-index";

const getRandomChar = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * (chars.length - 1 - 0) + 0)];
};

const randomKey = [
  "____",
  getRandomChar(),
  getRandomChar(),
  getRandomChar(),
  getRandomChar(),
  "____",
].join("");

const formatText = (text: string, highlightWords?: TMayBe<string[]>) => {
  if (highlightWords && highlightWords.length > 0) {
    const segmentsToMatch =
      highlightWords.length === 1 ? [text] : text.split(" ");
    return segmentsToMatch.map((toMatch, wordIndex) => {
      const segmentToMatch = `${toMatch} `;

      const match = highlightWords
        .find(
          (it) => segmentToMatch.toLowerCase().indexOf(it.toLowerCase()) > -1
        )
        ?.toLowerCase();

      if (match) {
        const matchedWordSegments = segmentToMatch
          .replace(
            new RegExp(match, "i"),
            [randomKey, match, randomKey].join("")
          )
          .split(randomKey);

        return matchedWordSegments.map((segment, splitWordIndex) => {
          if (segment === match) {
            const matchStartIndex = segmentToMatch
              .toLowerCase()
              .indexOf(segment);

            const matchToDisplay = segmentToMatch.substring(
              matchStartIndex,
              matchStartIndex + segment.length
            );

            return (
              <mark
                className="rounded-sm px-[2px]"
                key={`${wordIndex}_${splitWordIndex}`}
              >
                {matchToDisplay}
              </mark>
            );
          }
          return segment;
        });
      }

      return segmentToMatch;
    });
  }

  return text;
};

const QuotesList: React.FC<{
  quotes: { id: string; title: string; author: TMayBe<string> }[];
  startIndex: number;
  highlightWords?: TMayBe<string[]>;
}> = ({ quotes, startIndex, highlightWords }) => {
  const location = useLocation();
  const backToUrl = encodeURIComponent(
    [location.pathname, location.search, location.hash].join("")
  );

  return (
    <div className="flex flex-col gap-4">
      {quotes.map((quote, index) => (
        <div key={quote.id} className="flex flex-row items-start gap-4">
          <QuoteIndex index={startIndex - 1 + (index + 1)} />
          <div className="flex-1">
            <Link
              prefetch="intent"
              to={`/quotes/${quote.id}?backTo=${backToUrl}`}
              className="text-lg dark:font-thin"
            >
              {formatText(quote.title, highlightWords)}
            </Link>{" "}
            <span className="inline-flex flex-row flex-wrap items-center gap-2 text-nowrap">
              <span className="text-neutral-500 text-nowrap mr-2">
                {"- "}
                <If condition={(quote.author ?? "").length > 0}>
                  <If.True>
                    {formatText(quote.author ?? "Unknown", highlightWords)}
                  </If.True>
                  <If.False>{formatText("Unknown", highlightWords)}</If.False>
                </If>
              </span>
              <QuoteActions quote={quote} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuotesList;
