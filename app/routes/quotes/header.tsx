import { Link } from "@remix-run/react";
import { Plus, Quote } from "lucide-react";
import React from "react";
import Layout from "~/components/layout";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Layout.Screen.Header>
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
    </Layout.Screen.Header>
  );
};

export default Header;
