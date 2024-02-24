import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  QuoteIcon,
} from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import React from "react";
import { Button } from "~/components/ui/button";
import ToggleMode from "./toggle-mode";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Link to="/">
        <Button size="sm" variant="ghost">
          <HomeIcon className="h-4 w-4" />
        </Button>
      </Link>
      <Link to="/quotes/new">
        <Button size="sm" variant="ghost">
          <PlusIcon className="h-4 w-4" />
        </Button>
      </Link>
      <Link to="/quotes">
        <Button size="sm" variant="ghost">
          <QuoteIcon className="h-4 w-4" />
        </Button>
      </Link>
      <Link to="/quotes">
        <Button size="sm" variant="ghost">
          <MagnifyingGlassIcon className="h-4 w-4" />
        </Button>
      </Link>
      <ToggleMode />
    </div>
  );
};

export default Menu;
