import { Link } from "@remix-run/react";
import React from "react";
import Container from "../container";
import Menu from "./menu";

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
        <Link to="/" className="text-neutral-500 font-bold text-lg">
          Quotes
        </Link>
        <Menu />
      </div>
    </Container>
  );
};

export default Header;
