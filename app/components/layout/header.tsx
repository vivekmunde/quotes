import { QuoteIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import React from "react";
import ToggleMode from "~/components/toggle-mode";
import Container from "./container";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <Container>
      <div
        className={`py-2 flex flex-row justify-between items-center ${
          className ?? ""
        }`}
        {...props}
      >
        <Link to="/" className="text-neutral-500 font-bold">
          <QuoteIcon className="h-8 w-8 rotate-180" />
        </Link>
        <div className="flex flex-row items-center">
          {children}
          <ToggleMode />
        </div>
      </div>
    </Container>
  );
};

export default Header;
