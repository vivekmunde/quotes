import { PlusIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import React from "react";
import { Button } from "~/components/ui/button";
import Container from "../container";
import ToggleMode from "./toggle-mode";

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
        <div className="flex flex-row">
          <Link to="/quotes/new">
            <Button size="sm" variant="ghost">
              <PlusIcon className="h-4 w-4" />
            </Button>
          </Link>
          <ToggleMode />
        </div>
      </div>
    </Container>
  );
};

export default Header;
