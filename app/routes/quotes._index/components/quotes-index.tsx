import React from "react";

const QuoteIndex: React.FC<{ index: number }> = ({ index }) => {
  const width = Math.max(index.toString().length * 8 + 6, 20);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-centerstart">
        <div className="h-[6px] w-[4px] rounded-tl bg-neutral-300 dark:bg-neutral-600" />
        <div className="h-[2px] w-[4px] bg-neutral-300 dark:bg-neutral-600" />
      </div>
      <div className="flex flex-row">
        <div
          style={{ width: `${width}px` }}
          className="py-1 text-xs flex justify-center items-center rounded-tr rounded-bl rounded-br bg-neutral-300 dark:bg-neutral-600 text-neutral-950 dark:text-neutral-200 border-t border-transparent"
        >
          {index}
        </div>
      </div>
    </div>
  );
};

export default QuoteIndex;
