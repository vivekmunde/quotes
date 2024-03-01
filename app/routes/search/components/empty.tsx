import { Search } from "lucide-react";
import React from "react";

const Empty: React.FC = () => {
  return (
    <div className="text-neutral-400 dark:text-neutral-600 flex flex-col justify-center items-center text-center gap-4 py-[10vh]">
      <Search className="h-14 w-14" />
      <div>Type a few words to help us find a better match!</div>
    </div>
  );
};

export default Empty;
