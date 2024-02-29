import React from "react";

const U: React.FC = () => {
  return (
    <div className="flex flex-row gap-[2px]">
      <div className="flex flex-row items-end">
        <div className="h-16 w-2 rounded-t rounded-bl bg-neutral-600" />
        <div className="h-8 w-4 bg-neutral-600" />
      </div>
      <div className="flex flex-row items-end">
        <div className="h-8 w-4 bg-neutral-600" />
        <div className="h-16 w-2 rounded-t rounded-br bg-neutral-600" />
      </div>
    </div>
  );
};

export default U;
