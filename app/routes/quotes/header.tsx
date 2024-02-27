import { PlusIcon, QuoteIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import React from "react";
import Page from "~/components/layout/page";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Page.Header>
      <div className="flex flex-row">
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
      </div>
    </Page.Header>
  );
};

export default Header;
