import React from "react";

const E: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="h-8 w-1 rounded-tl bg-neutral-600" />
        <div className="h-8 w-8 rounded-tr rounded-br bg-neutral-600 border-t border-transparent" />
      </div>
      <div className="flex flex-row items-end">
        <div className="h-8 w-1 rounded-bl bg-neutral-600" />
        <div className="h-[2px] w-8 bg-neutral-600" />
      </div>
    </div>
  );
};

export default E;
