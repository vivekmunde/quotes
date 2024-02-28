import { Link } from "@remix-run/react";
import { Plus, Quote } from "lucide-react";
import React from "react";
import Page from "~/components/layout/page";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Page.Header>
      <div className="flex flex-row">
        <Link to="/quotes/new">
          <Button size="sm" variant="ghost">
            <Plus className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/quotes">
          <Button size="sm" variant="ghost">
            <Quote className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Page.Header>
  );
};

export default Header;
