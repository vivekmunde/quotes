import React from "react";

const T: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className="h-8 w-2 rounded-t bg-neutral-600" />
        <div className="h-[4px] w-8 bg-neutral-600" />
      </div>
      <div className="flex flex-row">
        <div className="h-8 w-2 rounded-bl bg-neutral-600" />
        <div className="h-8 w-8 rounded-tr rounded-br bg-neutral-600 border-t border-transparent" />
      </div>
    </div>
  );
};

export default T;
