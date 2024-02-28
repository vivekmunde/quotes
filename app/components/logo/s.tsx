import React from "react";

const S: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row border-b-2 border-neutral-600">
        <div className="h-8 w-1 rounded-tl bg-neutral-600" />
        <div className="h-4 w-8 rounded-tr rounded-br bg-neutral-600 border-t border-transparent" />
      </div>
      <div className="flex flex-row items-end mt-[-2px]">
        <div className="h-4 w-8 rounded-tl rounded-bl bg-neutral-600 border-t border-transparent" />
        <div className="h-8 w-1 rounded-br bg-neutral-600" />
      </div>
    </div>
  );
};

export default S;
