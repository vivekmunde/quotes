import React from "react";
import Container from "../container";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => {
  return (
    <Container>
      <div
        className={`py-2 flex flex-row justify-between items-center ${
          className ?? ""
        }`}
        {...props}
      >
        <a href="/" className="text-neutral-500 font-bold text-lg">
          Quotes
        </a>
      </div>
    </Container>
  );
};

export default Header;
