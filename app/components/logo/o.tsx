import React from "react";

const O: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="h-16 w-2 rounded-tl rounded-bl bg-neutral-600" />
      <div className="h-16 flex flex-col gap-[2px]">
        <div className="ml-[2px] flex-1 w-8 bg-neutral-600 border-t border-transparent" />
        <div className="mr-[2px] flex-1 w-8 bg-neutral-600 border-t border-transparent" />
      </div>
      <div className="h-16 w-2 rounded-br rounded-tr bg-neutral-600" />
    </div>
  );
};

export default O;
