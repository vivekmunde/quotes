import React from "react";
import E from "./e";
import O from "./o";
import Q from "./q";
import S from "./s";
import T from "./t";
import U from "./u";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 h-16">
      <Q />
      <U />
      <O />
      <T />
      <E />
      <S />
    </div>
  );
};

export default Logo;
